import { describe, expect, test } from "bun:test";
import "@testing-library/jest-dom";
import { vi } from "bun:test";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BaseForm from "@/components/form/BaseForm";

describe("BaseForm", () => {
  test("should submit form with valid data", async () => {
    const mockSubmit = vi.fn();

    render(<BaseForm submitHandler={mockSubmit} />);

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

    // submitHandlerが呼ばれることを確認
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        name: "山田太郎",
        email: "taro@example.com",
        inquiry: "お問い合わせ内容です",
      });
    });

    // 送信完了メッセージが表示されることを確認
    expect(screen.getByText("送信が完了しました。")).toBeInTheDocument();
  });
});
