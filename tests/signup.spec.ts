import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import{SignupPage} from '../pages/SignupPage'
import {LoginPage} from '../pages/LoginPage'
import {Navbar} from '../components/Navbar'
import {AccountCreatedPage} from '../pages/AccountCreatedPage'
import { DeleteAccountPage } from '../pages/DeleteAccountPage'


test.describe('Register User', () => {
    let homePage : HomePage
    let signupPage : SignupPage
    let loginPage : LoginPage
    let navbar : Navbar
    let accountCreatedPage : AccountCreatedPage
    let deleteAccountPage : DeleteAccountPage

    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        signupPage = new SignupPage(page)
        loginPage = new LoginPage(page)
        navbar = new Navbar(page)
        accountCreatedPage = new AccountCreatedPage(page)
        deleteAccountPage = new DeleteAccountPage(page)
        await homePage.visit()
        await homePage.popup()
    })

        test('Register User', async ({page}) => {
            await expect(homePage.titlePage).toBeVisible()
            await navbar.menu('Signup / Login')
            await expect(loginPage.newUserTitle).toBeVisible()
            await loginPage.newUserSignup("Thomas", "tom.stockkk@gmail.com")
            await expect (signupPage.nameInput).toHaveAttribute('value', 'Thomas'); // Ajout assertion personnel
            await expect (signupPage.emailInput).toHaveAttribute('value', 'tom.stockkk@gmail.com'); // Ajout assertion personnel
            await expect (signupPage.titleEnterAccountInformation).toBeVisible()
            await signupPage.enterAccountInformation()
            await expect(accountCreatedPage.titleAccountCreated).toBeVisible()
            await accountCreatedPage.continue()
            await expect (navbar.loggedIn).toBeVisible({ timeout: 10000 })
            await navbar.menu("Delete Account")
            await expect(deleteAccountPage.titleDeleteAccount).toBeVisible()
            await deleteAccountPage.continue()

        })

})
