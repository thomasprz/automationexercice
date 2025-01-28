import {chromium, expect, Locator, Page} from '@playwright/test'

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
        try {
            // Attendre que la modale soit visible
            await this.page.waitForSelector('button:has-text("Consent")', { state: 'visible', timeout: 5000 });
    
            // Cliquer sur le bouton "Consent"
            await this.page.click('button:has-text("Consent")');
        } catch (error) {
        }
    }
}