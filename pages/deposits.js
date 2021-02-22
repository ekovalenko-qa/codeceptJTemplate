const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        depositSumma: '#amount',
        infoCheckBox: '#contentbar > form > div.conditions-confirmation-block > div > div > div > label > input',
    },

    addDepositButton: {css: '#btn-show-rates'},
    addDemoDeposit3Button: {css: '//a[contains(@href, \'deposits/form/10152?days=367\')]'},

    // introducing methods

    createAccount() {
        I.waitForText('Открыть вклад');
        I.click(this.addDepositButton);
        I.click(this.addDemoDeposit3Button);
        I.fillField(this.fields.depositSumma, 55000);
        I.waitForText('Оценочный доход', 5);
        I.click('Дальше');
        I.click(this.fields.infoCheckBox);
        I.click('Подтвердить');
    },

}
