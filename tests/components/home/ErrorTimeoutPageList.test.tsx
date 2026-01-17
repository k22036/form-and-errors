import { describe, expect, test } from "bun:test";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorTimeoutPageList from "@/components/home/ErrorTimeoutPageList";
import { errorStatuses } from "@/lib/constants/errors";

describe("ErrorTimeoutPageList", () => {
  test("shows correct error page links", () => {
    render(<ErrorTimeoutPageList />);
    for (const status of errorStatuses) {
      const label = `エラーコード ${status} ページ`;
      const description = `/api/error?status=${status}`;
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
      const link = screen.getByText(label).closest("a");
      expect(link).toHaveAttribute("href", `/api/error?status=${status}`);
    }
  });

  test("shows timeout page link", () => {
    render(<ErrorTimeoutPageList />);
    expect(screen.getByText("タイムアウトページ")).toBeInTheDocument();
    expect(screen.getByText("/api/timeout")).toBeInTheDocument();
    const link = screen.getByText("タイムアウトページ").closest("a");
    expect(link).toHaveAttribute("href", "/api/timeout");
  });

  test("shows correct section title", () => {
    render(<ErrorTimeoutPageList />);
    expect(
      screen.getByText("エラー＆タイムアウトページ一覧"),
    ).toBeInTheDocument();
  });
});
