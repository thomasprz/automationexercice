import {expect,Locator,Page} from '@playwright/test'

export class AccountCreatedPage {

        readonly page : Page
        readonly titleAccountCreated : Locator
        readonly continueButton : Locator

    constructor (page:Page){
        this.page = page
        this.titleAccountCreated = page.locator('h2.text-center')
        this.continueButton = page.locator('[data-qa="continue-button"]')
    }

    async continue(){

        await this.continueButton.click()
    }

}