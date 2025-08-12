import { Locator, Page } from "@playwright/test";
import { SideMenuComponent } from "../components/side-menu.component";

export class PulpitPage {
  transferReceiver: Locator;
  transferAmount: Locator;
  transferTitle: Locator;
  transferButton: Locator;
  popUpCloseButton: Locator;
  showMessage: Locator;
  topUpReceiver: Locator;
  topUpAmount: Locator;
  topUpAgreementSpan: Locator;
  topUpButton: Locator;
  moneyValueText: Locator;
  sideMenu: SideMenuComponent;

  constructor(private page: Page) {
    this.sideMenu = new SideMenuComponent(this.page);

    this.transferReceiver = this.page.locator("#widget_1_transfer_receiver");
    this.transferAmount = this.page.locator("#widget_1_transfer_amount");
    this.transferTitle = this.page.locator("#widget_1_transfer_title");
    this.transferButton = this.page.locator("#execute_btn");
    this.popUpCloseButton = this.page.getByTestId("close-button");
    this.showMessage = this.page.locator("#show_messages");
    this.topUpReceiver = this.page.locator("#widget_1_topup_receiver");
    this.topUpAmount = this.page.locator("#widget_1_topup_amount");
    this.topUpAgreementSpan = this.page.locator(
      "#uniform-widget_1_topup_agreement span"
    );
    this.topUpButton = this.page.getByRole("button", {
      name: "doładuj telefon",
    });
    this.moneyValueText = this.page.locator("#money_value");
  }

  async makeQuickTransfer(
    receiverId: string,
    quickTransferAmount: string,
    transferTitle: string
  ): Promise<void> {
    await this.transferReceiver.selectOption(receiverId);
    await this.transferAmount.fill(quickTransferAmount);
    await this.transferTitle.fill(transferTitle);
    await this.transferButton.click();
    await this.popUpCloseButton.click();
  }
  async makeQuickTopUp(
    topUpReceiver: string,
    topUpAmount: string
  ): Promise<void> {
    await this.topUpReceiver.selectOption(topUpReceiver);
    await this.topUpAmount.fill(topUpAmount);
    await this.topUpAgreementSpan.click();
    await this.topUpButton.click();
    await this.popUpCloseButton.click();
  }
}
