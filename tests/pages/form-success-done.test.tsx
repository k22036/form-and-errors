import { describe, expect, test } from "bun:test";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "@/app/form/success/done/page";

describe("送信完了ページ", () => {
  test("完了メッセージとトップへ戻るリンクが表示される", () => {
    render(<Page />);
    expect(screen.getByText("送信が完了しました")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "トップへ戻る" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
