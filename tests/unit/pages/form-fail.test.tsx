import { describe, expect, test, vi } from "bun:test";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

// Mock dependencies
const redirectNG = vi.fn();
vi.mock("@/app/form/fail/redirect", () => ({
  redirectNG,
}));

vi.mock("@/lib/server/server", () => ({
  sendToServer: vi.fn(),
}));

const useQueryState = vi.fn();
vi.mock("nuqs", () => ({
  useQueryState,
  parseAsBoolean: { withDefault: vi.fn() },
  parseAsString: { withDefault: vi.fn() },
}));

// Dynamic import to ensure mocks are applied
const { default: Page } = await import("@/app/form/fail/page");

describe("Page", () => {
  const submit = () => {
    // 各フィールドに値を入力
    fireEvent.change(screen.getByLabelText("名前"), {
      target: { value: "山田太郎" },
    });
    fireEvent.change(screen.getByLabelText("メールアドレス"), {
      target: { value: "taro@example.com" },
    });
    fireEvent.change(screen.getByLabelText("お問い合わせ内容"), {
      target: { value: "お問い合わせ内容です" },
    });

    // 送信ボタンをクリック
    fireEvent.click(screen.getByRole("button", { name: "送信" }));
  };
  test("renders FailForm when shouldRedirect is false", async () => {
    useQueryState.mockReturnValue([false]);
    render(<Page />);

    submit();
    await waitFor(() => {
      // 表示内容
      expect(screen.getByText("送信に失敗しました。")).toBeInTheDocument();
      expect(
        screen.queryByText("送信が完了しました。"),
      ).not.toBeInTheDocument();
      expect(screen.queryByText("トップへ戻る")).not.toBeInTheDocument();

      // リダイレクトされない
      expect(redirectNG).not.toHaveBeenCalled();
    });
  });

  test("renders FailForm when shouldRedirect is true", async () => {
    useQueryState.mockReturnValue([true]);
    render(<Page />);

    submit();
    await waitFor(() => {
      // リダイレクトされる
      expect(redirectNG).toHaveBeenCalled();
    });
  });
});
