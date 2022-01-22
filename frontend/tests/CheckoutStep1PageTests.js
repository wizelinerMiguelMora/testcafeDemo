import InventoryPage from '../pages/InventoryPage'
import CartPage from "../pages/CartPage"
import CheckoutStep1Page from '../pages/CheckoutStep1Page'
import { USERINFO } from '../data/CheckoutData'
import { CHECKOUTMESSAGES } from '../data/ErrorMessages'
import IndexPage from '../pages/IndexPage'

fixture('Checkout Step 1 Test Page').page `https://www.saucedemo.com/`

//TC07 Validate Error Message is displayed in the user's information page
test('Continue with missing mail information', async t => {
    await t.useRole(IndexPage.stadardRole)
    await InventoryPage.addAllItems()
    await CartPage.validCartPageMI()
    await t.click(InventoryPage.checkoutBoton)
    await CheckoutStep1Page.fillInfo(USERINFO.NONEINFO, USERINFO.LASTNAME, USERINFO.POSTALCODE)
    await t.expect(CheckoutStep1Page.errorMessage.innerText).eql(CHECKOUTMESSAGES.FIRSTNAMEERROR)
})

//TC08 Validate the user navigates is displayed in the user's information page
test('Fill users information', async t => {
    await t.useRole(IndexPage.stadardRole)
    await InventoryPage.addAllItems()
    await CartPage.validCartPageMI()
    await t.click(InventoryPage.checkoutBoton)
    await CheckoutStep1Page.fillInfo(USERINFO.FIRSTNAME, USERINFO.LASTNAME, USERINFO.POSTALCODE)
})