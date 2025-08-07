import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo-bank.vercel.app/");
  await page.getByTestId("login-input").click();
  await page.getByTestId("login-input").fill("testerLO");
  await page.getByTestId("login-input").press("Tab");
  await page.getByTestId("password-input").click();
  await page.getByTestId("password-input").fill("123456789");
  await page.getByTestId("login-button").click();

  await expect(page.getByTestId("user-name")).toHaveText("Jan DemobankowyX");
});



