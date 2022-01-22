import {  Selector, t } from 'testcafe'
import IndexPage from './IndexPage'
class InventoryPage {

    constructor(){
        this.burgerBotton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartBotton = Selector ('#shopping_cart_container')
        this.checkoutBoton = Selector ('#checkout')
        this.backpack = Selector('#add-to-cart-sauce-labs-backpack')
        this.bikeLight = Selector('#add-to-cart-sauce-labs-bike-light')
        this.tshirt = Selector ('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.jacket = Selector('#add-to-cart-sauce-labs-fleece-jacket')
        this.onesie = Selector('#add-to-cart-sauce-labs-onesie')
        this.tshirtRed = Selector('.btn btn_primary btn_small btn_inventory').withText('ADD TO CART')
    }
    
    async logoutRole() {
        //await t.expect(IndexPage.loginButton)
        await t.click(this.burgerBotton)
               .click(this.logoutButton)
    }

    async addAllItems(){
        await t.click(this.backpack)
               .click(this.bikeLight)
               .click(this.tshirt)
               .click(this.jacket)
               .click(this.onesie)
               //.click( this.tshirtRed)
    }
}

export default new InventoryPage()