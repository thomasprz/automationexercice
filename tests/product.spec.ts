import {test, expect} from '@playwright/test'
import {ProductsPage} from '../pages/ProductsPage'
import {Navbar} from '../components/Navbar'
import {HomePage} from '../pages/HomePage'
import { ProductDetailsPage } from '../pages/ProductDetails'

test.describe('Products Page', () => {
    let productsPage : ProductsPage
    let navbar : Navbar
    let homepage : HomePage
    let productDetails : ProductDetailsPage


    test.beforeEach(async ({page}) => {
        productsPage = new ProductsPage(page)
        navbar = new Navbar(page)
        homepage = new HomePage(page)
        productDetails = new ProductDetailsPage(page)

        await homepage.visit()
        await homepage.popup()
        await expect(homepage.titlePage).toBeVisible()
        await navbar.menu("Products")
    })

    test('Test Case 8: Verify All Products and product detail page', async ({page}) => {
        await expect (productsPage.allProductsTitle).toBeVisible()
        await expect (productsPage.productsList).toBeVisible()
        await productsPage.clickViewProduct()
        await expect(page).toHaveURL('https://automationexercise.com/product_details/1')
        await expect(productDetails.productName).toBeVisible()
        await expect(productDetails.category).toBeVisible()
        await expect(productDetails.price).toBeVisible()
        await expect(productDetails.availability).toBeVisible()
        await expect(productDetails.condition).toBeVisible()
        await expect(productDetails.brand).toBeVisible()
    })

    test('Test Case 9: Search Product', async ({page}) => {
        await expect (productsPage.allProductsTitle).toBeVisible()
        await expect (productsPage.productsList).toBeVisible()
        await productsPage.productSearch("tshirt")
        await page.waitForTimeout(4000)
        await expect (productsPage.searchedProductsTitle).toBeVisible()
        await productsPage.allProductsRelatedToSearch("tshirt")
    })


})