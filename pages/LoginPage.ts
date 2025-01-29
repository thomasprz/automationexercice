import {expect,Locator,Page} from '@playwright/test'

export class LoginPage {

    readonly page : Page
    readonly nameInput : Locator
    readonly emailInputSignup : Locator
    readonly signupButton : Locator
    readonly newUserTitle : Locator
    readonly loginAccountTitle : Locator
    readonly emailInputLogin : Locator 
    readonly passwordInput : Locator
    readonly loginButton : Locator
    readonly errorMessageLogin : Locator
    readonly errorMessageSignup : Locator

    constructor(page : Page) {
        this.page = page
        this.nameInput = page.getByPlaceholder('Name')
        this.emailInputSignup = page.locator('[data-qa="signup-email"]')
        this.signupButton = page.getByRole('button', {name:'Signup'})
        this.newUserTitle = page.locator('.signup-form > h2')
        this.loginAccountTitle = page.locator('.login-form > h2')
        this.emailInputLogin = page.locator('[data-qa="login-email"]')
        this.passwordInput = page.getByPlaceholder("Password")
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.errorMessageLogin = page.locator('form[action="/login"] p');
        this.errorMessageSignup = page.locator('form[action="/signup"] p');
    }

    async newUserSignup(nom:string, email:string) {
        await this.nameInput.fill(nom)
        await this.emailInputSignup.fill(email)
        await this.signupButton.click()
    }

    async loginAccount(email:string, password: string) {
        await this.emailInputLogin.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}