import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";
import { paymentData } from "../test-data/payment.data";
import { PaymentPage } from "../pages/payment.page";
import { PulpitPage } from "../pages/pulpit.page";

test.describe("Payment tests", () => {
  let loginPage: LoginPage;
  let pulpitPage: PulpitPage;
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    pulpitPage = new PulpitPage(page);
    paymentPage = new PaymentPage(page);

    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto("/");
    await loginPage.login(userId, userPassword);
    await paymentPage.sideMenu.paymentMenu.click();
  });

  test("simplePayment", async ({ page }) => {
    //Arrange

    //Act
    await paymentPage.makeTransfer(
      paymentData.transferReceiver,
      paymentData.transferAccount,
      paymentData.transferAmount
    );

    //Assert
    await expect(pulpitPage.showMessage).toHaveText(
      paymentData.expectedMessage
    );
  });
});
