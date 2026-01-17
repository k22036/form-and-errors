import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import MainPageList from "@/components/home/MainPageList";
import "@testing-library/jest-dom";

const pageItems = [
  {
    label: "フォーム（失敗）",
    href: "/form/fail",
  },
  {
    label: "送信失敗完了ページ",
    href: "/form/fail/done",
  },
  {
    label: "フォーム（成功）",
    href: "/form/success",
  },
  {
    label: "送信成功完了ページ",
    href: "/form/success/done",
  },
  {
    label: "障害ページ",
    href: "/error",
  },
];

describe("MainPageList", () => {
  test("shows correct section title", () => {
    render(<MainPageList />);
    expect(
      screen.getByRole("heading", { name: "主要ページ一覧" }),
    ).toBeInTheDocument();
  });

  test("shows correct links and labels", () => {
    render(<MainPageList />);
    for (const item of pageItems) {
      // ラベルが表示されている
      const labelEl = screen.getByText(item.label);
      expect(labelEl).toBeInTheDocument();

      // hrefが正しい
      const linkEl = labelEl.closest("a");
      expect(linkEl).toHaveAttribute("href", item.href);

      // サブテキスト（パス）が表示されている
      expect(screen.getByText(item.href)).toBeInTheDocument();
    }
  });

  test("shows correct number of list items", () => {
    render(<MainPageList />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(pageItems.length);
  });
});
