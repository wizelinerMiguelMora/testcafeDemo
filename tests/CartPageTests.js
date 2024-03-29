import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import IndexPage from '../pages/IndexPage'

fixture('CheckoutStep 1 Page Test').page `https://www.saucedemo.com/`

//TC05 Validate the item has been added to the shopping cart.
test('Add a single item to shopping Cart', async t => {
    await t.useRole(IndexPage.stadardRole)
           .click(InventoryPage.backpack)
    await CartPage.validCartPageSI()
})

//TC06 Validate all items have been added to the shopping cart
test('Add multiple items to the shopping cart', async t => {
    await t.useRole(IndexPage.stadardRole)
    await InventoryPage.addAllItems()
    await CartPage.validCartPageMI()
})