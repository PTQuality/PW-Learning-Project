import { Locator, Page } from "@playwright/test";

export class SideMenuComponent {
  paymentMenu: Locator;
  constructor(private page: Page) {
    this.paymentMenu = this.page.getByRole("link", { name: "płatności" });
  }
}
