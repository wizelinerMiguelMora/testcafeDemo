import { standardRole } from '../pages/IndexPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from "../pages/CartPage"
import CheckoutStep1Page from '../pages/CheckoutStep1Page'
import { USERINFO } from '../data/CheckoutData'
import { CHECKOUTMESSAGES } from '../data/ErrorMessages'

fixture('Checkout Step 1 Test Page').page `https://www.saucedemo.com/`

//TC07 Validate Error Message is displayed in the user's information page
test('Continue with missing mail information', async t => {
    await t.useRole(standardRole)
    await InventoryPage.addAllItems()
    await CartPage.validCartPageMI()
    await t.click(InventoryPage.checkoutBoton)
    await CheckoutStep1Page.fillInfo('', USERINFO.LASTNAME, USERINFO.POSTALCODE)
    await t.expect(CheckoutStep1Page.errorMessage.innerText).eql(CHECKOUTMESSAGES.FIRSTNAMEERROR)
        //CheckoutStep1Page.fillInfo(CHECKOUTSELECTORS.FIRSTNAME, '', CHECKOUTSELECTORS.POSTALCODE)
    //await t.expect(CHECKOUTSELECTORS.ERRORMESSAGE.innerText).eql(CHECKOUTMESSAGES.LASTNAMEERROR)
        //CheckoutStep1Page.fillInfo(CHECKOUTSELECTORS.FIRSTNAME, CHECKOUTSELECTORS.LASTNAME, '')
    //await t.expect(CHECKOUTSELECTORS.ERRORMESSAGE.innerText).eql(CHECKOUTMESSAGES.POSTALCODEERROR)

})

//TC08 Validate the user navigates is displayed in the user's information page
test('Fill users information', async t => {

})