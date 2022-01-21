import { Role, Selector, t } from 'testcafe'
import { PASSWORDS, USERNAMES } from '../data/IndexData'
import { INDEXMESSAGES } from '../data/ErrorMessages'
import InventoryPage from './InventoryPage'

let URL = 'https://www.saucedemo.com/'

class IndexPage {
    constructor() {
        this.userField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.indexErrorMessage = Selector('#login_button_container div form h3')
    }

    async procLoginRoles(user, psswd) {
        if (user  == USERNAMES.NONE){
            await t.click(this.userField)
                   .pressKey('tab')
        }
        else {
            await t.typeText(this.userField, user)
        }
        if (psswd == PASSWORDS.NONE){
            await t.click(this.passwordField)
                   .pressKey('tab')
        }
        else {
            await t.typeText (this.passwordField, psswd)
        }
        await t.click(this.loginButton)
    }

    async emessages(message) {
        await t.expect(this.indexErrorMessage.innerText).eql(message)
    }

    //Standard Role
    stadardRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.STANDARD, PASSWORDS.CORRECT)
        await t.expect(InventoryPage.burgerBotton.exists).ok()
    }, { preserveUrl: true })

    //Problem Role
    problemRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.PROBLEM, PASSWORDS.CORRECT)
        await t.expect(InventoryPage.burgerBotton.exists).ok()
    }, { preserveUrl: true })

    //Performance Role
    performRole = Role(URL,async () => {
        await this.procLoginRoles(USERNAMES.PERFORM, PASSWORDS.CORRECT)
        await t.expect(InventoryPage.burgerBotton.exists).ok()
    }, { preserveUrl: true })

    //Locked User
    lockedRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.LOCKED, PASSWORDS.CORRECT)
        await this.emessages(INDEXMESSAGES.LOCKEDMESSAGE)
    })

    //Invalid User with Correct Password
    invUsrRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.INVALID, PASSWORDS.CORRECT)
        await this.emessages(INDEXMESSAGES.USERMESSAGE)
    })

    //Invalid Password with Correct User
    invPswdRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.STANDARD, PASSWORDS.INCORRECT)
        await this.emessages(INDEXMESSAGES.INVALIDLOGIN)
    })

    //Empty User with correct Password
    emptUsrRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.NONE, PASSWORDS.CORRECT)
        await this.emessages(INDEXMESSAGES.EMPTYUSER)
    })

    //Empty Password with correct User
    emptPswdRole = Role(URL, async () => {
        await this.procLoginRoles(USERNAMES.STANDARD, PASSWORDS.NONE)
        await this.emessages(INDEXMESSAGES.PASSWORDMESSAGE)
    })
}
 
export default new IndexPage()