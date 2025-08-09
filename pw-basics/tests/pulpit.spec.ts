import { test, expect } from "@playwright/test";
test.describe("Pulpit tests", () => {
  const userId = "testerLO";
  const userPassword = "123456789";

  test.beforeEach(async ({ page }) => {
    //Login
    await page.goto("/");
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();
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
});
