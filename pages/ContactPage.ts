import{expect,Locator, Page} from '@playwright/test'
import path from 'path';

export class ContactPage {

    readonly page : Page
    readonly getInTouchTitle : Locator
    readonly nameInput : Locator
    readonly emailInput : Locator
    readonly subjectInput : Locator
    readonly messageInput : Locator
    readonly fileUpload : Locator
    readonly buttonSubmit : Locator
    readonly confirmation : Locator
    readonly homeButton : Locator

    constructor(page:Page){

        this.page = page
        this.getInTouchTitle = page.locator(".col-sm-8 h2")
        this.nameInput = page.getByPlaceholder("Name")
        this.emailInput = page.locator('[data-qa="email"]')
        this.subjectInput = page.getByPlaceholder("Subject")
        this.messageInput = page.getByPlaceholder("Your Message Here")
        this.fileUpload = page.locator('[name="upload_file"]')
        this.buttonSubmit = page.locator('[name="submit"]')
        this.confirmation = page.locator('.alert-success')
        this.homeButton = page.locator(".btn-success")
    }

    async fillContactForm(){
        await this.nameInput.fill('Thomas')
        await this.emailInput.fill('test@gmail.com')
        await this.subjectInput.fill('Hello')
        await this.messageInput.fill("Bonjour")
        const filePath = '/Users/thomasprz/Documents/SiteInternet/Assets/logo.jpg';
        await this.fileUpload.click();
        await this.fileUpload.setInputFiles(filePath);
        await this.page.getByText('Ok').click();
        await this.buttonSubmit.click()
    }

    async backHome(){
        this.buttonSubmit.click()
    }
}
