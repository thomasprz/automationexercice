import{expect,Locator, Page} from '@playwright/test'

export class CartPage {

    readonly page : Page
    readonly subscriptionTitle : Locator
    readonly subscriptionButtonSubmit : Locator
    readonly emailInput : Locator
    readonly successfullySubscribedMessage : Locator
    

    constructor(page:Page){
        this.page = page
        this.subscriptionTitle = page.locator('.single-widget > h2')
        this.subscriptionButtonSubmit = page.locator("#subscribe")
        this.emailInput = page.locator('#susbscribe_email')
        this.successfullySubscribedMessage = page.locator(".alert-success")
        

    }

    async scrolldown (){
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);  // Scroller jusqu'en bas de la page
        });
    }

    async subscriptionForm(mail:string){
        await this.emailInput.fill(mail)
        await this.subscriptionButtonSubmit.click()
    }

}
