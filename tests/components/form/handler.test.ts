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
  test("should call validation, send, and afterHandler", async () => {
    const validator = vi.fn();
    const afterHandler = vi.fn();

    await submitHandler(mockData, validator, afterHandler);

    expect(validator).toHaveBeenCalledWith(mockData);
    expect(sendToServer).toHaveBeenCalledWith(mockData);
    expect(afterHandler).toHaveBeenCalledWith(mockData);
  });

  test("should call send and afterHandler even without validation", async () => {
    const afterHandler = vi.fn();

    await submitHandler(mockData, undefined, afterHandler);

    expect(sendToServer).toHaveBeenCalledWith(mockData);
    expect(afterHandler).toHaveBeenCalledWith(mockData);
  });

  test("should call validation and send even without afterHandler", async () => {
    const validator = vi.fn();

    await submitHandler(mockData, validator);

    expect(validator).toHaveBeenCalledWith(mockData);
    expect(sendToServer).toHaveBeenCalledWith(mockData);
  });
});
