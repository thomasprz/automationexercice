import {expect, Page, Locator} from '@playwright/test'

export class ProductDetailsPage {

    readonly page : Page
    readonly productName : Locator
    readonly category : Locator
    readonly price : Locator
    readonly availability : Locator
    readonly condition : Locator
    readonly brand : Locator
    readonly quantityInput : Locator
    readonly addToCartButton : Locator
    readonly viewCart : Locator

    constructor(page:Page){
        this.page = page
        this.productName = page.locator('.product-information > h2')
        this.category = page.locator('.product-information p', { hasText: 'Category:' });
        this.price = page.locator('.product-information span span')
        this.availability = page.locator('.product-information p', { hasText: 'Availability:' });
        this.condition =  page.locator('.product-information p', { hasText: 'Condition:' });
        this.brand = page.locator('.product-information p', { hasText: 'Brand:' });
        this.quantityInput = page.locator('#quantity')
        this.addToCartButton = page.locator('.cart')
        this.viewCart = page.locator('text=View Cart')
    }

        async increaseQuantity(){
            await this.quantityInput.fill('4')
            await this.addToCartButton.click()
            await this.viewCart.click()
        }

}