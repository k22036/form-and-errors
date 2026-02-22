import { beforeEach, describe, expect, test, vi } from "bun:test";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

// Mock dependencies
const redirectOK = vi.fn();
const sendToServer = vi.fn();
const useQueryState = vi.fn();

vi.mock("@/app/form/success/redirect", () => ({
  redirectOK,
}));

vi.mock("@/lib/server/server", () => ({
  sendToServer,
}));

vi.mock("nuqs", () => ({
  useQueryState,
  parseAsBoolean: { withDefault: vi.fn() },
  parseAsString: { withDefault: vi.fn() },
}));

// Dynamic import to ensure mocks are applied
const { default: Page } = await import("@/app/form/success/page");

describe("Page", () => {
  const submit = () => {
    fireEvent.change(screen.getByLabelText("名前"), {
      target: { value: "山田太郎" },
    });
    fireEvent.change(screen.getByLabelText("メールアドレス"), {
      target: { value: "taro@example.com" },
    });
    fireEvent.change(screen.getByLabelText("お問い合わせ内容"), {
      target: { value: "お問い合わせ内容です" },
    });
    fireEvent.click(screen.getByRole("button", { name: "送信" }));
  };

  beforeEach(() => {
    vi.clearAllMocks();
    sendToServer.mockResolvedValue({ ok: true });
  });

  test("renders SuccessForm when shouldRedirect is false", async () => {
    useQueryState
      .mockReturnValueOnce([false]) // redirect
      .mockReturnValueOnce(["お問い合わせフォーム"]); // header
    render(<Page />);

    submit();

    await waitFor(() => {
      expect(screen.getByText("送信が完了しました。")).toBeInTheDocument();
      expect(
        screen.queryByText("送信に失敗しました。"),
      ).not.toBeInTheDocument();
      expect(screen.queryByText("トップへ戻る")).not.toBeInTheDocument();
      expect(redirectOK).not.toHaveBeenCalled();
    });
  });

  test("renders SuccessForm when shouldRedirect is true", async () => {
    useQueryState
      .mockReturnValueOnce([true]) // redirect
      .mockReturnValueOnce(["お問い合わせフォーム"]); // header
    render(<Page />);

    submit();

    await waitFor(() => {
      expect(redirectOK).toHaveBeenCalled();
    });
  });

  test("calls sendToServer with input values", async () => {
    useQueryState
      .mockReturnValueOnce([false]) // redirect
      .mockReturnValueOnce(["お問い合わせフォーム"]); // header
    render(<Page />);

    submit();

    await waitFor(() => {
      expect(sendToServer).toHaveBeenCalledTimes(1);
      expect(sendToServer).toHaveBeenCalledWith({
        name: "山田太郎",
        email: "taro@example.com",
        inquiry: "お問い合わせ内容です",
      });
    });
  });

  test("shows error UI and does not redirect when submission fails", async () => {
    sendToServer.mockRejectedValueOnce(new Error("network error"));
    useQueryState
      .mockReturnValueOnce([true]) // redirect
      .mockReturnValueOnce(["お問い合わせフォーム"]); // header
    render(<Page />);

    submit();

    await waitFor(() => {
      expect(screen.getByText("送信に失敗しました。")).toBeInTheDocument();
      expect(redirectOK).not.toHaveBeenCalled();
    });
  });

  test("renders custom header from query state", () => {
    useQueryState
      .mockReturnValueOnce([false]) // redirect
      .mockReturnValueOnce(["カスタムヘッダー"]); // header
    render(<Page />);

    expect(screen.getByText("カスタムヘッダー")).toBeInTheDocument();
  });
});
