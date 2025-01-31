import {expect, Page, Locator} from '@playwright/test'

export class ProductsPage {

    readonly page : Page
    readonly allProductsTitle : Locator
    readonly productsList : Locator
    readonly viewProduct : Locator
    readonly searchProduct : Locator
    readonly searchButton : Locator
    readonly searchedProductsTitle : Locator
    readonly productsItem : Locator
    readonly firstProductInList : Locator
    readonly addToCartButton : Locator
    readonly continueShoppingButton : Locator
    readonly secondProductInList : Locator
    readonly viewCart : Locator


    constructor(page:Page){
        this.page = page
        this.allProductsTitle = page.locator('.features_items > h2')
        this.productsList = page.locator('.features_items')
        this.viewProduct = page.locator('.fa-plus-square')
        this.searchProduct = page.locator('#search_product')
        this.searchButton = page.locator('#submit_search')
        this.searchedProductsTitle = page.locator('.features_items > h2')
        this.productsItem = page.locator('.productinfo > p')
        this.firstProductInList = page.locator('.productinfo').nth(0)
        this.secondProductInList = page.locator('.productinfo').nth(1)
        this.addToCartButton = page.locator('[data-product-id="1"].add-to-cart')
        this.continueShoppingButton = page.getByRole('button', {name:'Continue Shopping'})
        this.viewCart = page.locator('text=View Cart')
    }

    async clickViewProduct(){
        await this.viewProduct.first().click()
    }

    async productSearch(product:string){
        await this.searchProduct.fill(product)
        await this.searchButton.click()
    }

    async allProductsRelatedToSearch(searchProduct: string) {
        const count = await this.productsItem.count()  // Obtenir le nombre d'éléments
        for (let i = 0; i < count; i++) {  // Boucle pour chaque produit
            const productItem = this.productsItem.nth(i)  // Localiser l'élément ième
            const textContent = await productItem.textContent()  // Récupérer le texte de l'élément
            
            // Assurez-vous que textContent n'est pas null ou vide
            if (textContent) {
                const normalizedText = textContent.toLowerCase().replace(/[-\s]/g, '')  // Normaliser le texte
                expect(normalizedText).toContain(searchProduct)  // Vérifier que le texte normalisé contient le produit recherché
            }
        }
    }
    async addProductToCart(){
        await this.firstProductInList.hover()
        await this.addToCartButton.click()
        await this.continueShoppingButton.click()
        await this.secondProductInList.hover()
        await this.addToCartButton.click()
        await this.viewCart.click()
    }
}