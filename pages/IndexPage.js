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
            await t.pressKey('tab')
        }
        else {
            await t.typeText(this.userField, user)
        }
        if (psswd == PASSWORDS.NONE){
            await t.click(this.passwordField)
            await t.pressKey('tab')
        }
        else {
            await t.typeText (this.passwordField, psswd)
        }
        await t.click(this.loginButton)
        await t.expect(InventoryPage.burgerBotton.exists).ok()
    }

    async emessages (message) {
        expect(this.indexErrorMessager.innerText).eql(message)
    }
}

const INDEXPAGE = new IndexPage()

//Valid USERS

//Standard User
export const standardRole = Role(URL, async () => {
    INDEXPAGE.procLoginRoles(USERNAMES.STANDARD, PASSWORDS.CORRECT)
}, {preserveUrl:true} )

//Problem User
export const problemRole = Role(URL, async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.PROBLEM, PASSWORDS.CORRECT)
})

//Performance Glitch User 
export const performRole = Role(URL,async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.PERFORM, PASSWORDS.CORRECT)
})
    
//Invalid USERS

//Locked User
export const lockedRole = Role(URL, async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.LOCKED, PASSWORDS.CORRECT)
    INDEXPAGE.emessages(INDEXMESSAGES.LOCKEDMESSAGE)
})

//Invalid User with Correct Password
export const invUsrRole = Role(URL, async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.INVALID, PASSWORDS.CORRECT)
    INDEXPAGE.emessages(INDEXMESSAGES.INVALIDLOGIN)
})

//Invalid Password with Correct User
export const invPswdRole = Role(URL, async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.STANDARD, PASSWORDS.INCORRECT)
    INDEXPAGE.emessages(INDEXMESSAGES.INVALIDLOGIN)
})

//Empty User with correct Password
export const emptUsrRole = Role(URL, async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.NONE, PASSWORDS.CORRECT)
    INDEXPAGE.emessages(INDEXMESSAGES.USERMESSAGE)
})

//Empty Password with correct User
export const emptPswdRole = Role(URL, async t => {
    INDEXPAGE.procLoginRoles(USERNAMES.STANDARD, PASSWORDS.NONE)
    INDEXPAGE.emessages(INDEXMESSAGES.PASSWORDMESSAGE)
})
    
export default new IndexPage()