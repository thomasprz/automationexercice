import {test, expect} from '@playwright/test'
import { TestCasesPage } from '../pages/TestCasesPage'
import { Navbar } from '../components/Navbar'
import { HomePage } from '../pages/HomePage'

test.describe('Navigation to Test Cases', () => {
    let testCasePage : TestCasesPage
    let navbar : Navbar
    let homepage : HomePage


    test.beforeEach(async ({page}) => {
        testCasePage = new TestCasesPage(page)
        navbar = new Navbar(page)
        homepage = new HomePage(page)

        await homepage.visit()
        await homepage.popup()
        await expect(homepage.titlePage).toBeVisible()
        await navbar.menu("Test Cases")
    })

    test('Test Case 7: Verify Test Cases Page', async ({page}) => {
        await expect(page).toHaveURL('https://automationexercise.com/test_cases')
    })

})