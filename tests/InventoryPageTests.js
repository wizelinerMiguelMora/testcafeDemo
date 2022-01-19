import { standardRole } from "../pages/IndexPage"
import InventoryPage from '../pages/InventoryPage'

fixture('Inventory Page Test').page `https://www.saucedemo.com/`

//TC04 Validate user navigates to the shopping cart page.
test('Navigate to the shopping cart page ', async t =>{
    await t.useRole(standardRole)
    await t.click(InventoryPage.cartBotton)
})