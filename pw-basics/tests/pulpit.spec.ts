import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { pulpitData } from "../test-data/pulpit.data";
import { LoginPage } from "../pages/login.page";
import { PulpitPage } from "../pages/pulpit.page";

test.describe("Pulpit tests", () => {
  test.beforeEach(async ({ page }) => {
    //Login
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    await page.goto("/");

    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();
  });
  test("quick payment with correct data", async ({ page }) => {
    // Arrange
    const expectedMessage = `Przelew wykonany! ${pulpitData.expectedTransferReceiver} - ${pulpitData.quickTransferAmount},00PLN - ${pulpitData.transferTitle}`;
    const pulpitPage = new PulpitPage(page);

    //Act
    await pulpitPage.transferReceiver.selectOption(pulpitData.receiverId);
    await pulpitPage.transferAmount.fill(pulpitData.quickTransferAmount);
    await pulpitPage.transferTitle.fill(pulpitData.transferTitle);
    await pulpitPage.transferButton.click();
    await pulpitPage.popUpCloseButton.click();

    // Assert
    await expect(pulpitPage.showMessage).toHaveText(expectedMessage);
  });
  test("successful mobile top-up", async ({ page }) => {
    // Arrange
    const topUpReceiver = "500 xxx xxx";
    const topUpAmount = "50";
    const expectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${topUpReceiver}`;
    const pulpitPage = new PulpitPage(page);

    // Act
    await pulpitPage.topUpReceiver.selectOption(topUpReceiver);
    await pulpitPage.topUpAmount.fill(topUpAmount);
    await pulpitPage.topUpAgreementSpan.click();
    await pulpitPage.topUpButton.click();
    await pulpitPage.popUpCloseButton.click();

    // Assert
    await expect(pulpitPage.showMessage).toHaveText(expectedMessage);
  });

  test("correct balance after successful mobile top-up", async ({ page }) => {
    // Arrange
    const pulpitPage = new PulpitPage(page);
    const topUpReceiver = "500 xxx xxx";
    const topUpAmount = "50";
    const initialBalance = await pulpitPage.moneyValueText.innerText();
    const expectedBalance = Number(initialBalance) - Number(topUpAmount);

    // Act
    await pulpitPage.topUpReceiver.selectOption(topUpReceiver);
    await pulpitPage.topUpAmount.fill(topUpAmount);
    await pulpitPage.topUpAgreementSpan.click();
    await pulpitPage.topUpButton.click();
    await pulpitPage.popUpCloseButton.click();

    // Assert
    await expect(pulpitPage.moneyValueText).toHaveText(`${expectedBalance}`);
  });
});
