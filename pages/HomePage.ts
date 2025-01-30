import {expect, Locator, Page} from '@playwright/test'

export class HomePage {

    readonly page : Page
    readonly titlePage : Locator

    constructor(page:Page){
        this.page = page
        this.titlePage = page.getByAltText('Website for automation practice')
    }

    async visit() {
        await this.page.goto('/')
        await this.page.waitForLoadState("networkidle")
    }

    async popup() {
                await this.page.click('button:has-text("Consent")');
    }
}