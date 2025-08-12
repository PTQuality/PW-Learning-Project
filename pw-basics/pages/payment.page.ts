import { Locator, Page } from "@playwright/test";
import { SideMenuComponent } from "../components/side-menu.component";

export class PaymentPage {
  transferReceiver: Locator;
  buttonCloseModal: Locator;
  formAccountTo: Locator;
  formAmount: Locator;
  buttonMakePayment: Locator;
  sideMenu: SideMenuComponent;

  constructor(private page: Page) {
    this.sideMenu = new SideMenuComponent(this.page);
    this.transferReceiver = this.page.getByTestId("transfer_receiver");
    this.formAccountTo = this.page.getByTestId("form_account_to");
    this.formAmount = this.page.getByTestId("form_amount");
    (this.buttonMakePayment = this.page.getByRole("button", {
      name: "wykonaj przelew",
    })),
      (this.buttonCloseModal = this.page.getByTestId("close-button"));
  }

  async makeTransfer(
    transferReceiver: string,
    transferAccount: string,
    transferAmount: string
  ): Promise<void> {
    await this.transferReceiver.fill(transferReceiver);
    await this.formAccountTo.fill(transferAccount);
    await this.formAmount.fill(transferAmount);
    await this.buttonMakePayment.click();
    await this.buttonCloseModal.click();
  }
}
