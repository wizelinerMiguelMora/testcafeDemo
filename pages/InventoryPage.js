import {  Selector, t } from 'testcafe'

class InventoryPage {

    constructor(){
        this.cartBotton = Selector ('#shopping_cart_container')
        this.checkoutBoton = Selector ('#checkout')
        this.burgerBotton = Selector('#react-burger-menu-btn')
        this.backpack = Selector('#add-to-cart-sauce-labs-backpack')
        this.bikeLight = Selector('#add-to-cart-sauce-labs-bike-light')
        this.tshirt = Selector ('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.jacket = Selector('#add-to-cart-sauce-labs-fleece-jacket')
        this.onesie = Selector('#add-to-cart-sauce-labs-onesie')
        this.tshirtRed = Selector('#add-to-cart-test.allthethings()-t-shirt-(red)')
    }
    
    async logoutRole() {
        await t.click(this.burgerButton)
    }

    async addAllItems(){
        await t.click(this.backpack)
        await t.click(this.bikeLight)
        await t.click(this.tshirt)
        await t.click(this.jacket)
        await t.click(this.onesie)
        await t.click( this.tshirtRed)
    }
}

export default new InventoryPage()