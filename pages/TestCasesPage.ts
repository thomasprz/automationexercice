import {expect, Page, Locator} from '@playwright/test'

export class TestCasesPage {

    readonly page : Page


    constructor(page:Page){
        this.page = page
    }

}