import {expect,Locator,Page} from '@playwright/test'

export class DeleteAccountPage {

        readonly page : Page
        readonly titleDeleteAccount : Locator
        readonly continueButton : Locator

    constructor (page:Page){
        this.page = page
        this.titleDeleteAccount = page.locator('h2.text-center')
        this.continueButton = page.locator('[data-qa="continue-button"]')
    }

    async continue(){
        await this.continueButton.click()
    }

}