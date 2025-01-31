import{expect,Locator, Page} from '@playwright/test'

export class ViewCartPage {

    readonly page : Page
    readonly listProductsCart : Locator
    readonly cartQuantity : Locator

    constructor(page:Page){
        this.page = page
        this.listProductsCart = page.locator('tbody tr')
        this.cartQuantity = page.locator('.cart_quantity .disabled')
    }

    
    async verifyAllProductsInCart(expectedProducts) {
        const rowCount = await this.listProductsCart.count(); // Nombre de produits dans le panier
        for (let i = 0; i < rowCount; i++) {
            const productRow = this.listProductsCart.nth(i);
            const { name, price, quantity } = expectedProducts[i];

            // Vérifier le nom du prod
            await expect(productRow.locator('.cart_description h4')).toHaveText(name);
            await expect(productRow.locator('.cart_price p')).toHaveText(`Rs. ${price}`);
            await expect(productRow.locator('.cart_quantity button')).toHaveText(`${quantity}`);

            // Vérifier le total (prix * quantité)
            const expectedTotal = price * quantity;
            await expect(productRow.locator('.cart_total_price')).toHaveText(`Rs. ${expectedTotal}`);
        }
    }

   
}
