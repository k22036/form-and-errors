import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home", () => {
  test("renders home page correctly", () => {
    render(<Home />);

    const title = "テスト用ページ一覧";
    expect(screen.getByText(title)).toBeInTheDocument();

    const contents = [
      "主要ページ一覧",
      "フォーム（失敗）用リンク",
      "フォーム（成功）用リンク",
      "エラー＆タイムアウトページ一覧",
    ];
    contents.forEach((content) => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });
});
