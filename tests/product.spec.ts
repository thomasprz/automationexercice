import {test, expect} from '@playwright/test'
import {ProductsPage} from '../pages/ProductsPage'
import {Navbar} from '../components/Navbar'
import {HomePage} from '../pages/HomePage'
import { ProductDetailsPage } from '../pages/ProductDetails'

test.describe('Products Page', () => {
    let productPage : ProductsPage
    let navbar : Navbar
    let homepage : HomePage
    let productDetails : ProductDetailsPage


    test.beforeEach(async ({page}) => {
        productPage = new ProductsPage(page)
        navbar = new Navbar(page)
        homepage = new HomePage(page)
        productDetails = new ProductDetailsPage(page)

        await homepage.visit()
        await homepage.popup()
        await expect(homepage.titlePage).toBeVisible()
        await navbar.menu("Products")
    })

    test('Test Case 8: Verify All Products and product detail page', async ({page}) => {
        await expect (productPage.allProductsTitle).toBeVisible()
        await expect (productPage.productsList).toBeVisible()
        await productPage.clickViewProduct()
        await expect(page).toHaveURL('https://automationexercise.com/product_details/1')
        await expect(productDetails.productName).toBeVisible()
        await expect(productDetails.category).toBeVisible()
        await expect(productDetails.price).toBeVisible()
        await expect(productDetails.availability).toBeVisible()
        await expect(productDetails.condition).toBeVisible()
        await expect(productDetails.brand).toBeVisible()
    })

})