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

test.describe("Form Fail Tests", () => {
  const clickFormFail = async (page: Page, card: Locator) => {
    await expect(card).toBeVisible();
    await card.click();
    await page.waitForLoadState("load");
  };

  const fillForm = async (page: Page) => {
    await page.getByLabel("名前").fill("山田太郎");
    await page.getByLabel("メールアドレス").fill("test@example.com");
    await page.getByLabel("お問い合わせ内容").fill("お問い合わせ内容です");
  };

  const submitForm = async (page: Page) => {
    const submitButton = page.getByRole("button", { name: "送信" });
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    await page.waitForLoadState("load");
  };

  test("should work /form/fail", async ({ page }) => {
    const card = page.getByRole("link", {
      name: "フォーム（失敗） /form/fail",
    });
    await clickFormFail(page, card);
    await fillForm(page);
    await submitForm(page);

    await expect(page.getByText("送信に失敗しました")).toBeVisible();
    const backToTop = page.getByText("トップへ戻る").first();
    await expect(backToTop).not.toBeVisible();
  });

  test("should work /form/fail?redirect=false", async ({ page }) => {
    const card = page.getByRole("link", {
      name: "/form/fail?redirect=false",
    });
    await clickFormFail(page, card);
    await fillForm(page);
    await submitForm(page);

    await expect(page.getByText("送信に失敗しました")).toBeVisible();
    const backToTop = page.getByText("トップへ戻る").first();
    await expect(backToTop).not.toBeVisible();
  });

  test("should work /form/fail?redirect=true", async ({ page }) => {
    const card = page.getByRole("link", {
      name: "/form/fail?redirect=true",
    });
    await clickFormFail(page, card);
    await fillForm(page);
    await submitForm(page);

    await expect(
      page.getByRole("heading", { name: "送信に失敗しました" }),
    ).toBeVisible();

    const backToTop = page.getByText("トップへ戻る").first();
    await expect(backToTop).toBeVisible();
    await backToTop.click();
    await page.waitForLoadState("load");
    await expect(page).toHaveURL("/");
  });
});
