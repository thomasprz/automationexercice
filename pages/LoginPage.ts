import {expect,Locator,Page} from '@playwright/test'

export class LoginPage {

    readonly page : Page
    readonly nameInput : Locator
    readonly emailInput : Locator
    readonly signupButton : Locator
    readonly newUserTitle : Locator

    constructor(page : Page) {
        this.page = page
        this.nameInput = page.getByPlaceholder('Name')
        this.emailInput = page.locator('[data-qa="signup-email"]')
        this.signupButton = page.getByRole('button', {name:'Signup'})
        this.newUserTitle = page.locator('.signup-form > h2')
    }

    async newUserSignup(nom:string, email:string) {
        await this.nameInput.fill(nom)
        await this.emailInput.fill(email)
        await this.signupButton.click()
    }
}