import {expect,Locator,Page} from '@playwright/test'

export class SignupPage {

    readonly page : Page
    readonly titleEnterAccountInformation : Locator
    readonly gender : Locator
    readonly nameInput : Locator
    readonly emailInput : Locator
    readonly passwordInput : Locator
    readonly dayOfDob : Locator
    readonly monthOfDob : Locator
    readonly yearOfDob : Locator
    readonly newsletter : Locator
    readonly specialOffers : Locator
    readonly firstNameInput : Locator
    readonly lastNameInput : Locator
    readonly addressCompany : Locator
    readonly countryBox : Locator
    readonly stateInput : Locator
    readonly cityInput : Locator
    readonly zipcodeInput : Locator
    readonly phoneInput : Locator
    readonly createAccountButton : Locator

    constructor(page : Page) {
        this.page = page
        this.titleEnterAccountInformation = page.getByRole('heading', { name: 'Enter Account Information' });
        this.gender = page.locator('#id_gender1'); //radio 
        this.nameInput = page.locator('#name')
        this.emailInput = page.locator('#email')
        this.passwordInput = page.locator('#password') 
        this.dayOfDob = page.locator('#days')
        this.monthOfDob = page.locator('#months')
        this.yearOfDob = page.locator('#years')
        this.newsletter = page.locator('#newsletter')
        this.specialOffers = page.locator('#optin')
        this.firstNameInput = page.locator('#first_name')
        this.lastNameInput = page.locator('#last_name')
        this.addressCompany = page.locator('#address1')
        this.countryBox = page.locator('#country')
        this.stateInput = page.locator('#state')
        this.cityInput = page.locator('#city')
        this.zipcodeInput = page.locator('#zipcode')
        this.phoneInput = page.locator('#mobile_number')
        this.createAccountButton = page.getByRole('button', {name:'Create Account'})
    }

    async enterAccountInformation() {
        await this.gender.click()
        await this.passwordInput.fill('Test')
        await this.dayOfDob.selectOption('27')
        await this.monthOfDob.selectOption('4')
        await this.yearOfDob.selectOption('1983')
        await this.newsletter.check()
        await this.specialOffers.check()
        await this.firstNameInput.fill('Thomas')
        await this.lastNameInput.fill('Prz')
        await this.addressCompany.fill('32 rue du Cousteaux')
        await this.countryBox.selectOption('Canada')
        await this.stateInput.fill('Nord')
        await this.cityInput.fill('Lille')
        await this.zipcodeInput.fill('59000')
        await this.phoneInput.fill('0626843876')
        await this.createAccountButton.click()
    }

    
}