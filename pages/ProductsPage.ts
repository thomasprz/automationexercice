import {expect, Page, Locator} from '@playwright/test'

export class ProductsPage {

    readonly page : Page
    readonly allProductsTitle : Locator
    readonly productsList : Locator
    readonly viewProduct : Locator


    constructor(page:Page){
        this.page = page
        this.allProductsTitle = page.locator('.features_items > h2')
        this.productsList = page.locator('.features_items')
        this.viewProduct = page.locator('.fa-plus-square')

    }

    async clickViewProduct(){
        await this.viewProduct.first().click()
    }
}