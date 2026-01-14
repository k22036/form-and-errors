import { describe, expect, test, vi } from "bun:test";
import type { InquiryFormValues } from "@/lib/types/form";

const sendToServer = vi.fn();

vi.mock("@/lib/server/server", () => ({
  sendToServer,
}));

// Dynamic import to ensure mocks are applied
const { submitHandler } = await import("@/components/form/handler");

const mockData: InquiryFormValues = {
  name: "テスト太郎",
  email: "test@example.com",
  inquiry: "お問い合わせ内容",
};

describe("submitHandler", () => {
  test("バリデーション・送信・後処理がすべて呼ばれる", async () => {
    const validator = vi.fn();
    const afterHandler = vi.fn();

    await submitHandler(mockData, validator, afterHandler);

    expect(validator).toHaveBeenCalledWith(mockData);
    expect(sendToServer).toHaveBeenCalledWith(mockData);
    expect(afterHandler).toHaveBeenCalledWith(mockData);
  });

  test("バリデーションなしでも送信・後処理が呼ばれる", async () => {
    const afterHandler = vi.fn();

    await submitHandler(mockData, undefined, afterHandler);

    expect(sendToServer).toHaveBeenCalledWith(mockData);
    expect(afterHandler).toHaveBeenCalledWith(mockData);
  });

  test("後処理なしでもバリデーション・送信が呼ばれる", async () => {
    const validator = vi.fn();

    await submitHandler(mockData, validator);

    expect(validator).toHaveBeenCalledWith(mockData);
    expect(sendToServer).toHaveBeenCalledWith(mockData);
  });
});
