import { describe, expect, test } from "bun:test";
import z from "zod";
import { GET } from "@/app/api/error/route";
import { errorDefinitions } from "@/lib/constants/errors";

const ErrorResponseSchema = z.object({
  error: z.string().min(1),
  message: z.string().min(1),
});

describe("GET /api/error", () => {
  test("should return defined error for known status", async () => {
    for (const errorDef of errorDefinitions) {
      const url = `http://localhost/api/error?status=${errorDef.status}`;
      const request = new Request(url);
      const response = await GET(request);

      expect(response.status).toBe(errorDef.status);

      const data = await response.json();
      const result = ErrorResponseSchema.safeParse(data);
      expect(result.success).toBe(true);

      expect(data).toEqual({
        error: errorDef.error,
        message: errorDef.message,
      });
    }
  });
});
