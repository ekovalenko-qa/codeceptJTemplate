const { I } = inject();

module.exports = {
    // setting locators
    fields: {
        count: '#accounts-index',
        statementStatement: '#statements-statement',
        currentStatement: '#accounts-index',
        deposits: '#deposits-index',
        personOffer: '#offers-button',
        cards: '#cards-overview-index',
        goldCard: '#cards > li.row-as-link.cards.active > a > span.card-type.alias',
    },
    // introducing methods
    getCountStatement() {
        I.waitForText('СЧЕТА');
        I.moveCursorTo(this.fields.count, 5,5);
        I.click(this.fields.statementStatement);
    },
    getMainStatementDetails() {
        I.waitForText('СЧЕТА');
        I.moveCursorTo(this.fields.count, 5,5);
        I.click(this.fields.currentStatement);
        I.click('Зарплатный');
    },
    goToDeposits() {
        I.waitForText('ВКЛАДЫ');
        I.click(this.fields.deposits);
    },
    goToOffer() {
        I.click(this.fields.personOffer);
    },
    goToCards() {
        I.click(this.fields.cards);
        I.click(this.fields.goldCard);
    },
}
