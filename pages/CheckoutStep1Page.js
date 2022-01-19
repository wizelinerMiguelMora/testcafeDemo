import { Selector, t } from 'testcafe'

class CheckoutS1 {

    constructor(){
        this.firstName = Selector('#first-name')
        this.lastName = Selector ('#last-name')
        this.postalCode = Selector('#postal-code')
        this.continueBotton = Selector('#continue')
        this.errorMessage = Selector ('#checkout_info_container div form h3')
    }

    async validAllItems() {

    }

    async fillInfo(first, last, pc) {
        if (first == ''){
            await t.click(this.firstName)
            await t.pressKey('tab')
        }
        else { await t.typeText (this.firstName,first) }
        if (last == '') {
            await t.click( this.lastName)
            await t.pressKey('tab')
        }
        else { await t.typeText( this.lastName, last) }
        if (pc == '') {
            await t.click(this.postalCode)
            await t.pressKey('tab')
        }
        else { await t.typeText(this.postalCode, pc) }
        await t.click(this.continueBotton)
    }
}

export default new CheckoutS1()