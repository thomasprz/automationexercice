import {test,expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import { Navbar } from '../components/Navbar'
import { LoginPage } from '../pages/LoginPage'
import { DeleteAccountPage } from '../pages/DeleteAccountPage'

test.describe('Login User', async () => {
    let homepage : HomePage
    let loginpage : LoginPage
    let navbar : Navbar
    let deleteAccountPage : DeleteAccountPage

    test.beforeEach(async ({page}) => {
        homepage = new HomePage(page)  
        loginpage = new LoginPage(page)
        navbar = new Navbar(page)
        deleteAccountPage = new DeleteAccountPage(page)

        await homepage.visit()
        await homepage.popup()
        await expect(homepage.titlePage).toBeVisible()
        await navbar.menu("Signup / Login")
    })

    test('Test Case 2: Login User with correct email and password', async ({page}) => { // Se connecter avec un utilisateur existant
        await expect(loginpage.loginAccountTitle).toBeVisible()
        await loginpage.loginAccount("existingaddress@gmail.com", "Lille-59000")
        await expect(navbar.loggedIn).toBeVisible()
        await navbar.menu("Delete Account")
        await expect(deleteAccountPage.titleDeleteAccount).toBeVisible()
        await deleteAccountPage.continue()
    })

    test('Test Case 3: Login User with incorrect email and password', async ({page}) => { // Essayer de se connecter avec un utilisateur inexistant (erreur)
        await expect(loginpage.newUserTitle).toBeVisible()
        await loginpage.loginAccount("existingaddress@gmail.com", "Lille-590000")
        await expect(loginpage.errorMessageLogin).toHaveText('Your email or password is incorrect!')

    })

    test('Test Case 4: Logout User', async ({page}) => { // Se connecter à un utilisateur existant et se déconnecter à la fin du scénario
        await expect(loginpage.newUserTitle).toBeVisible()
        await loginpage.loginAccount("existingaddress@gmail.com", "Lille-59000")
        await expect(navbar.loggedIn).toBeVisible()
        await navbar.menu("Logout")
        await expect (page).toHaveURL('https://automationexercise.com/login')
    })
})