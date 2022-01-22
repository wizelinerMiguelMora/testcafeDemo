import { CHECKOUTTEST } from "../data/CheckoutData"
import CartPage1 from "../pages/CartPage-1"
import IndexPage from "../pages/IndexPage"
import InventoryPage from '../pages/InventoryPage'

fixture('Inventory Page Test').page `https://www.saucedemo.com/`

//TC04 Validate user navigates to the shopping cart page.
test('Navigate to the shopping cart page ', async t =>{
    await t.useRole(IndexPage.stadardRole)
           .click(InventoryPage.cartBotton)
           .expect(CartPage1.checkoutBotton.innerText).eql(CHECKOUTTEST)
})