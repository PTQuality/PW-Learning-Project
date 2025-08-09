import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";
test.describe("Pulpit tests", () => {
  test.beforeEach(async ({ page }) => {
    //Login
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    page.goto("/");

    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();
  });
  test("quick payment with correct data", async ({ page }) => {
    // Arrange
    const receiverId = "2";
    const amountTopUp = "120";
    const transferTitle = "Przelew Środków";
    const expectedTransferReceiver = "Chuck Demobankowy";

    //Act
    await page.locator("#widget_1_transfer_receiver").selectOption(receiverId);
    await page.locator("#widget_1_transfer_amount").fill(amountTopUp);
    await page.locator("#widget_1_transfer_title").fill(transferTitle);
    await page.locator("#execute_btn").click();
    await page.getByTestId("close-button").click();

    // Assert
    await expect(page.locator("#show_messages")).toHaveText(
      `Przelew wykonany! ${expectedTransferReceiver} - ${amountTopUp},00PLN - ${transferTitle}`
    );
  });
  test("successful mobile top-up", async ({ page }) => {
    // Arrange
    const mobilePhoneNumber = "500 xxx xxx";
    const topUpAmount = "50";
    const expectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${mobilePhoneNumber}`;
    const initialBalance = await page.locator("#money_value").innerText();
    const expectedBalance = Number(initialBalance) - Number(topUpAmount);

    //Act
    await page
      .locator("#widget_1_topup_receiver")
      .selectOption(mobilePhoneNumber);
    await page.locator("#widget_1_topup_amount").fill(topUpAmount);
    await page.locator("#uniform-widget_1_topup_agreement span").click();
    await page.getByRole("button", { name: "doładuj telefon" }).click();
    await page.getByTestId("close-button").click();

    //Assert
    await expect(page.locator("#money_value")).toHaveText(`${expectedBalance}`);
  });

  test("successful balance change after transfer", async ({ page }) => {
    // Arrange
    const mobilePhoneNumber = "500 xxx xxx";
    const topUpAmount = "50";
    const expectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${mobilePhoneNumber}`;
    const initialBalance = await page.locator("#money_value").innerText();
    const expectedBalance = Number(initialBalance) - Number(topUpAmount);

    //Act
    await page
      .locator("#widget_1_topup_receiver")
      .selectOption(mobilePhoneNumber);
    await page.locator("#widget_1_topup_amount").fill(topUpAmount);
    await page.locator("#uniform-widget_1_topup_agreement span").click();
    await page.getByRole("button", { name: "doładuj telefon" }).click();
    await page.getByTestId("close-button").click();

    //Assert
    await expect(page.locator("#money_value")).toHaveText(`${expectedBalance}`);
  });
});
