import { expect, type Locator, type Page, test } from "@playwright/test";

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

test.describe("Error Tests", () => {
  const clickError = async (page: Page, card: Locator) => {
    await expect(card).toBeVisible();
    await card.click();
    await page.waitForLoadState("load");
  };

  test("should work /error", async ({ page }) => {
    const card = page.getByRole("link", { name: "障害ページ /error" });
    await clickError(page, card);

    await expect(page.getByRole("heading", { name: "障害発生" })).toBeVisible();
  });
});
