import {Page, Locator, expect} from '@playwright/test'

export class Navbar {

    readonly page : Page
    readonly homePage : Locator
    readonly productsPage : Locator
    readonly cartPage : Locator
    readonly signupLogin : Locator
    readonly testCases : Locator
    readonly apiTesting : Locator
    readonly videoTutorials : Locator
    readonly contactUs : Locator
    readonly loggedIn : Locator
    readonly deleteAccount : Locator


    constructor(page:Page){
        this.page = page
        this.homePage = page.getByRole('link', {name:' Home'})
        this.productsPage = page.getByRole('link', {name:' Products'})
        this.cartPage = page.getByRole('link', {name:' Cart'})
        this.signupLogin = page.getByRole('link', {name:' Signup / Login'})
        this.testCases = page.getByRole('link', {name:' Test Cases'})
        this.apiTesting = page.getByRole('link', {name:' API Testing'})
        this.videoTutorials = page.getByRole('link', {name:' Video Tutorials'})
        this.contactUs = page.getByRole('link', {name:' Contact us'})
        this.loggedIn = page.getByRole('link', { name: /Logged in as/ });
        this.deleteAccount = page.getByRole('link', {name: ' Delete Account'})
    }

    async menu(menuName) {
        switch(menuName) {
            case "Home" :
                await this.homePage.click()
                break
            case "Products" : 
                await this.productsPage.click()
                break
            case "Cart" : 
                await this.cartPage.click()
                break
            case "Signup / Login" : 
                await this.signupLogin.click()
                break
            case "Test Cases" : 
                await this.testCases.click()
                break
            case "API Testing" : 
                await this.apiTesting.click()
                break
            case "Video Tutorials" : 
                await this.videoTutorials.click()
                break
            case "Contact us" : 
                await this.contactUs.click()
                break
            case "Logged In" :
                await this.loggedIn.click()
                break
            case "Delete Account" :
                await this.deleteAccount.click()
                break
            default : 
            throw new Error("Cette page n'existe pas")
        }
    }
}