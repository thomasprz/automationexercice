import {expect, Locator, Page} from '@playwright/test'

export class HomePage {

    readonly page : Page
    readonly titlePage : Locator
    readonly subscriptionTitle : Locator
    readonly emailInput : Locator
    readonly subscriptionButtonSubmit : Locator
    readonly successfullySubscribedMessage : Locator


    constructor(page:Page){
        this.page = page
        this.titlePage = page.getByAltText('Website for automation practice')
        this.subscriptionTitle = page.locator('.single-widget > h2')
        this.subscriptionButtonSubmit = page.locator("#subscribe")
        this.emailInput = page.locator('#susbscribe_email')
        this.successfullySubscribedMessage = page.locator(".alert-success")
    }

    async visit() {
        await this.page.goto('/')
        await this.page.waitForLoadState("networkidle")
    }

    async popup() {
        await this.page.click('button:has-text("Consent")');
    }

    async subscriptionForm(mail:string){
        await this.emailInput.fill(mail)
        await this.subscriptionButtonSubmit.click()
    }

    async scrolldown (){
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);  // Scroller jusqu'en bas de la page
        });
    }

}