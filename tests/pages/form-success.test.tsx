import { describe, expect, test, vi } from "bun:test";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

// Mock dependencies
const redirectOK = vi.fn();
vi.mock("@/app/form/success/redirect", () => ({
  redirectOK,
}));

vi.mock("@/lib/server/server", () => ({
  sendToServer: vi.fn(),
}));

const useQueryState = vi.fn();
vi.mock("nuqs", () => ({
  useQueryState,
  parseAsBoolean: { withDefault: vi.fn() },
}));

// Dynamic import to ensure mocks are applied
const { default: Page } = await import("@/app/form/success/page");

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
  test("renders BaseForm with afterHandler undefined when shouldRedirect is false", () => {
    useQueryState.mockReturnValue([false]);
    render(<Page />);

    submit();
    waitFor(() => {
      expect(screen.getByText("送信が完了しました")).toBeInTheDocument();
      expect(screen.queryByText("トップへ戻る")).not.toBeInTheDocument();
    });
  });

  test("renders BaseForm with afterHandler=redirectOk when shouldRedirect is true", () => {
    useQueryState.mockReturnValue([true]);
    render(<Page />);

    submit();
    waitFor(() => {
      expect(screen.getByText("送信が完了しました")).toBeInTheDocument();
      expect(screen.queryByText("トップへ戻る")).toBeInTheDocument();
    });
  });
});
