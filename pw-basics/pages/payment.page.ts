import { Locator, Page } from "@playwright/test";

export class PaymentPage {
  transferReceiver: Locator;
  buttonCloseModal: Locator;
  formAccountTo: Locator;
  formAmount: Locator;
  buttonMakePayment: Locator;

  constructor(private page: Page) {
    this.transferReceiver = this.page.getByTestId("transfer_receiver");
    this.formAccountTo = this.page.getByTestId("form_account_to");
    this.formAmount = this.page.getByTestId("form_amount");
    (this.buttonMakePayment = this.page.getByRole("button", {
      name: "wykonaj przelew",
    })),
      (this.buttonCloseModal = this.page.getByTestId("close-button"));
  }
}
