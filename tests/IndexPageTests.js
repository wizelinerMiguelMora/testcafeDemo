import { Role } from 'testcafe'
import IndexPage from '../pages/IndexPage'

fixture('Index Page Test').page `https://www.saucedemo.com/`

//TC01 Login with a valid User.
test('Login with a Valid User', async t => {
    await t.useRole(IndexPage.stadardRole)
           .useRole(IndexPage.problemRole)
           .useRole(IndexPage.performRole)
})

//TC02 Validate Error message is displayed.
test('Login with an Invalid user', async t => {
    await t.useRole(IndexPage.lockedRole)
          .useRole(IndexPage.invUsrRole)
          .useRole(IndexPage.invPswdRole)
          .useRole(IndexPage.emptUsrRole)
          .useRole(IndexPage.emptPswdRole)
})

//TC03 Logout from product's page.
test('Validate user navigates to the login page', async t => {
    await t.useRole(IndexPage.stadardRole)
           .useRole(Role.anonymous())
    //await InventoryPage.logoutRole()
})