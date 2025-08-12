import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { pulpitData } from "../test-data/pulpit.data";
import { LoginPage } from "../pages/login.page";
import { PulpitPage } from "../pages/pulpit.page";

test.describe("Pulpit tests", () => {
  let loginPage: LoginPage;
  let pulpitPage: PulpitPage;

  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    await page.goto("/");
    loginPage = new LoginPage(page);
    pulpitPage = new PulpitPage(page);

    await loginPage.login(userId, userPassword);
  });
  test(
    "quick payment with correct data",
    { annotation: { type: "documentation", description: "www.google.com" } },
    async ({ page }) => {
      // Arrange
      const expectedMessage = `Przelew wykonany! ${pulpitData.expectedTransferReceiver} - ${pulpitData.quickTransferAmount},00PLN - ${pulpitData.transferTitle}`;

      //Act
      await pulpitPage.makeQuickTransfer(
        pulpitData.receiverId,
        pulpitData.quickTransferAmount,
        pulpitData.transferTitle
      );
      // Assert
      await expect(pulpitPage.showMessage).toHaveText(expectedMessage);
    }
  );
  test("successful mobile top-up", async ({ page }) => {
    // Arrange
    const topUpReceiver = "500 xxx xxx";
    const topUpAmount = "50";
    const expectedMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${topUpReceiver}`;

    // Act
    await pulpitPage.makeQuickTopUp(topUpReceiver, topUpAmount);

    // Assert
    await expect(pulpitPage.showMessage).toHaveText(expectedMessage);
  });

  test("correct balance after successful mobile top-up", async ({ page }) => {
    // Arrange
    const topUpReceiver = "500 xxx xxx";
    const topUpAmount = "50";
    const initialBalance = await pulpitPage.moneyValueText.innerText();
    const expectedBalance = Number(initialBalance) - Number(topUpAmount);

    // Act
    await pulpitPage.makeQuickTopUp(topUpReceiver, topUpAmount);

    // Assert
    await expect(pulpitPage.moneyValueText).toHaveText(`${expectedBalance}`);
  });
});
