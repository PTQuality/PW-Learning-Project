import { test, expect } from "@playwright/test";
test.describe("User login to Demobank", () => {
  const url = "https://demo-bank.vercel.app/";

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("login with correct credentials", async ({ page }) => {
    // Arrange
    const userId = "testerLO";
    const userPassword = "123456789";
    const expectedUserName = "Jan Demobankowy";

    //Act
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();

    //Assert
    await expect(page.getByTestId("user-name")).toHaveText(expectedUserName);
  });

  test("unsuccessful login with too short login", async ({ page }) => {
    // Arrange
    const incorrectUserId = "tester";
    const userPassword = "123456789";
    const expectedMessage = "identyfikator ma min. 8 znaków";

    //Act
    await page.getByTestId("login-input").fill(incorrectUserId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("password-input").blur();

    //Assert
    await expect(page.getByTestId("error-login-id")).toHaveText(
      expectedMessage
    );
  });

  test("unsuccessful login with too short password", async ({ page }) => {
    // Arrange
    const url = "https://demo-bank.vercel.app/";
    const userId = "testerLO";
    const userPassword = "1234567";
    const expectedMessage = "hasło ma min. 8 znaków";

    //Act
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("password-input").blur();

    //Assert
    await expect(page.getByTestId("error-login-password")).toHaveText(
      expectedMessage
    );
  });
});
