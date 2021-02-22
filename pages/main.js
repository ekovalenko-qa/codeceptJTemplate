const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        password: '#login-form > div:nth-child(6) > input[type=password]',
        username: '#login-form > div:nth-child(5) > input[type=text]',
    },
    loginButton: {css: '#login-button'},
    comeInButton: {css: '#login-otp-button'},
    logoutButton: {css: '#logout-button'},

    // introducing methods
    login(username, password) {
        I.amOnPage('https://idemo.bspb.ru/');
        I.fillField(this.fields.username, 'demo');
        I.click(this.fields.password)
        I.fillField(this.fields.password, 'demo');
        I.click(this.loginButton);
        I.click(this.comeInButton);
    },
    logout() {
        I.click(this.loginButton);
    },
}
