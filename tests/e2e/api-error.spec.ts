import { expect, type Locator, type Page, test } from "@playwright/test";
import { errorDefinitions } from "@/lib/constants/errors";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("load");
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach("screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  }
});

test.describe("API Error Tests", () => {
  const clickError = async (page: Page, card: Locator) => {
    await expect(card).toBeVisible();
    await card.click();
    await page.waitForLoadState("load");
  };

  for (const errorDef of errorDefinitions) {
    test(`should return error for status ${errorDef.status}`, async ({
      page,
    }) => {
      const card = page.getByRole("link", {
        name: `/api/error?status=${errorDef.status}`,
      });
      await clickError(page, card);

      await expect(page.getByText(errorDef.error)).toBeVisible();
      await expect(page.getByText(errorDef.message)).toBeVisible();
    });
  }
});
