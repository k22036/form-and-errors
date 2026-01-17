import { describe, expect, test } from "bun:test";
import { GET } from "@/app/api/timeout/route";

describe("GET /api/timeout", () => {
  test("should be pending for at least 3 seconds", async () => {
    const apiPromise = GET();

    const timerPromise = new Promise((resolve) =>
      setTimeout(() => resolve("3000ms"), 3000),
    );

    const firstResolved = await Promise.race([apiPromise, timerPromise]);

    // timerPromiseが最初に解決される = APIは3秒以上保留されている
    expect(firstResolved).toBe("3000ms");
  }, 5000);
});
