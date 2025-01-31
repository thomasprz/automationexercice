import {test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('Contact', () => {
    let homepage : HomePage


    test.beforeEach(async ({page}) => {
        homepage = new HomePage(page)

        await homepage.visit()
        await homepage.popup()
        await expect (homepage.titlePage).toBeVisible()
    })

    test('Test Case 10: Verify Subscription in home page', async ({page}) => {
        await homepage.scrolldown()
        await expect (homepage.subscriptionTitle).toBeVisible()
        await homepage.subscriptionForm("jean@gmail.com")
        await expect(homepage.successfullySubscribedMessage).toHaveText('You have been successfully subscribed!')
        

    })

})