import {test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { ContactPage } from '../pages/ContactPage'
import { Navbar } from '../components/Navbar'


test.describe('Contact', () => {
    let homepage : HomePage
    let contactpage : ContactPage
    let navbar : Navbar


    test.beforeEach(async ({page}) => {
        homepage = new HomePage(page)
        contactpage = new ContactPage(page)
        navbar = new Navbar(page)

        await homepage.visit()
        await homepage.popup()
        await expect (homepage.titlePage).toBeVisible()
        await navbar.menu("Contact us")
    })

    test("Test Case 6: Contact Us Form", async ({page}) => {
        await expect (contactpage.getInTouchTitle).toBeVisible()
        await contactpage.fillContactForm()
        await page.waitForTimeout(5000)
        await expect(contactpage.confirmation).toHaveText("Success! Your details have been submitted successfully.")
        await contactpage.backHome()
        await expect(page).toHaveURL("https://automationexercise.com/");
    })

})