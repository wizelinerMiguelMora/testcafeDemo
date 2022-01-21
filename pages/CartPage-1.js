import { Selector, t } from 'testcafe'
import InventoryPage from './InventoryPage'

class CartPage {
    constructor(){
        this.checkoutBotton = Selector('#checkout')
        this.backpack = Selector ('#item_4_title_link')
        this.bikeLight = Selector('#item_0_title_link')
        this.tsbhirt = Selector('#item_1_title_link')
        this.jacekt = Selector('#item_5_title_link')
        this.onesie = Selector('#item_2_title_link')
        this.tshirtRed = Selector('#item_3_title_link')
    }

    async validCartPageSI(){
        await t.click(InventoryPage.cartBotton)
        await t.expect(this.cartbackpack.exists).ok()
    }

    async validCartPageMI(){
        await t.click(InventoryPage.cartBotton)
        await t.expect(this.backpack.exists).ok()
        await t.expect(this.bikeLight.exists).ok()
        await t.expect(this.tsbhirt.exists).ok()
        await t.expect(this.jacekt.exists).ok()
        await t.expect(this.onesie.exists).ok()
              t.expect(this.tshirtRed.exists).ok()
    }
}

export default new CartPage()