const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        count: '#accounts-index',
        statement: '#statements-statement',
        deposits: '#btn-show-rates',
    },
    loginButton: {css: '#login-button'},
    comeInButton: {css: '#login-otp-button'},
    logoutButton: {css: '#logout-button'},

    // introducing methods
    getCountStatement() {
        I.waitForText('СЧЕТА');
        I.moveCursorTo(this.fields.count, 5,5);
        I.click(this.fields.statement);
    },
    goToDeposits() {
        I.waitForText('ВКЛАДЫ');
        I.click(this.fields.deposits);
    },

}
