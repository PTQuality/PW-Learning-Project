import { Locator, Page } from "@playwright/test";

export class PulpitPage {
  transferReceiver: Locator;
  transferAmount: Locator;
  transferTitle: Locator;
  transferButton: Locator;
  popUpCloseButton: Locator;
  showMessage: Locator;
  paymentMenu: Locator;
  topUpReceiver: Locator;
  topUpAmount: Locator;
  topUpAgreementSpan: Locator;
  topUpButton: Locator;
  moneyValueText: Locator;

  constructor(private page: Page) {
    this.transferReceiver = this.page.locator("#widget_1_transfer_receiver");
    this.transferAmount = this.page.locator("#widget_1_transfer_amount");
    this.transferTitle = this.page.locator("#widget_1_transfer_title");
    this.transferButton = this.page.locator("#execute_btn");
    this.popUpCloseButton = this.page.getByTestId("close-button");
    this.showMessage = this.page.locator("#show_messages");
    this.paymentMenu = this.page.getByRole("link", { name: "płatności" });
    this.topUpReceiver = this.page.locator("#widget_1_topup_receiver");
    this.topUpAmount = this.page.locator("#widget_1_topup_amount");
    this.topUpAgreementSpan = this.page.locator(
      "#uniform-widget_1_topup_agreement span"
    );
    this.topUpButton = this.page.getByRole("button", {
      name: "doładuj telefon",
    });
    this.moneyValueText = this.page.locator("#money_value")
  }
}
