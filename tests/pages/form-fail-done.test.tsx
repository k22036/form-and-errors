import { describe, expect, test } from "bun:test";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/form/fail/done/page";

describe("送信完了ページ（失敗）", () => {
  test("完了メッセージとトップへ戻るリンクが表示される", () => {
    render(<Page />);
    expect(screen.getByText("送信に失敗しました")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "トップへ戻る" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
