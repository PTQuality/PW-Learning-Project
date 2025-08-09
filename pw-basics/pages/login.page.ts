import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}
  // await page.getByTestId("login-input").fill(userId);
  loginInput = this.page.getByTestId("login-input");
  passwordInput = page.getByTestId("password-input");
  loginButton = page.getByTestId("login-button");
}
