import IndexPage, { performRole, problemRole, standardRole, lockedRole, invUsrRole, invPswdRole, 
         emptUsrRole, emptPswdRole} from '../pages/IndexPage'
import InventoryPage from '../pages/InventoryPage'

fixture('Index Page Test').page `https://www.saucedemo.com/`

//TC01 Login with a valid User.
test.only('Login with a Valid User', async t => {
    await t.useRole(standardRole)
    //await t.useRole(problemRole)
    //await t.useRole(performRole)
})

//TC02 Validate Error message is displayed.
test('Login with an Invalid user', async t => {
    await t.useRole(lockedRole)
          t.useRole(invUsrRole)
          t.useRole(invPswdRole)
          t.useRole(emptUsrRole)
          t.useRole(emptPswdRole)
})

//TC03 Logout from product's page.
test('Validate user navigates to the login page', async t => {
    //await t.useRole(standardRole)
    await InventoryPage.logoutRole()
})