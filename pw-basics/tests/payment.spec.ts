import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";
import { paymentData } from "../test-data/payment.data";
import { PaymentPage } from "../pages/payment.page";
import { PulpitPage } from "../pages/pulpit.page";

test.describe("Payment tests", () => {
  test.beforeEach(async ({ page }) => {
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto("/");
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();
  });

  test("simplePayment", async ({ page }) => {
    //Arrange
    const paymentPage = new PaymentPage(page);
    const pulpitPage = new PulpitPage(page);

    //Act
    await pulpitPage.paymentMenu.click();
    await paymentPage.transferReceiver.click();
    await paymentPage.transferReceiver.fill(paymentData.transferReceiver);
    await paymentPage.formAccountTo.fill(paymentData.transferAccount);
    await paymentPage.formAmount.fill(paymentData.transferAmount);
    await paymentPage.buttonMakePayment.click();
    await paymentPage.buttonCloseModal.click();

    //Assert
    await expect(pulpitPage.showMessage).toHaveText(
      paymentData.expectedMessage
    );
  });
});
