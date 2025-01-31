import {test, expect} from '@playwright/test'
import { Navbar } from '../components/Navbar'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'
import { ProductsPage } from '../pages/ProductsPage'
import { ViewCartPage } from '../pages/ViewCartPage'
import { ProductDetailsPage } from '../pages/ProductDetails'

test.describe('Cart Flow', () => {
    let navbar : Navbar
    let homePage : HomePage
    let cartPage : CartPage
    let productsPage : ProductsPage
    let viewcartPage : ViewCartPage
    let productDetailsPage : ProductDetailsPage

    test.beforeEach(async ({page}) => {
        navbar = new Navbar(page)
        homePage = new HomePage(page)
        cartPage = new CartPage(page)
        productsPage = new ProductsPage(page)
        viewcartPage = new ViewCartPage(page)
        productDetailsPage = new ProductDetailsPage(page)

        await homePage.visit()
        await homePage.popup()
        await expect(homePage.titlePage).toBeVisible()
    })

    test('Test Case 11: Verify Subscription in Cart page', async({page}) => {
        await cartPage.scrolldown()
        await expect (cartPage.subscriptionTitle).toBeVisible()
        await cartPage.subscriptionForm("jeacn@gmail.com")
        await expect(cartPage.successfullySubscribedMessage).toHaveText('You have been successfully subscribed!')

    })

    test('Test Case 12: Add Products in Cart', async ({page}) => {
        await productsPage.addProductToCart()
        await expect(viewcartPage.listProductsCart).toHaveCount(2)
    })

    test('Test Case 13: Verify Product quantity in Cart', async ({page}) => {
        await productsPage.clickViewProduct()
        await expect(page).toHaveURL("https://automationexercise.com/product_details/1")
        await productDetailsPage.increaseQuantity()
        await expect (viewcartPage.cartQuantity).toBe(4)


    })

})