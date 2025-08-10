import { test, expect } from "@playwright/test";
import { loginData } from "../test-data/login.data";
import { LoginPage } from "../pages/login.page";
test.describe("User login to Demobank", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("login with correct credentials", async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const expectedUserName = "Jan Demobankowy";

    //Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();
    //Assert
    await expect(loginPage.userNameText).toHaveText(expectedUserName);
  });

  test("unsuccessful login with too short login", async ({ page }) => {
    // Arrange
    const incorrectUserId = "tester";
    const expectedMessage = "identyfikator ma min. 8 znaków";

    //Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(incorrectUserId);
    await loginPage.passwordInput.click();

    //Assert
    await expect(loginPage.loginError).toHaveText(expectedMessage);
  });

  test("unsuccessful login with too short password", async ({ page }) => {
    // Arrange
    const url = "https://demo-bank.vercel.app/";
    const userId = "testerLO";
    const userPassword = "1234567";
    const expectedMessage = "hasło ma min. 8 znaków";

    //Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.passwordInput.blur();

    //Assert
    await expect(loginPage.passwordError).toHaveText(expectedMessage);
  });
});
