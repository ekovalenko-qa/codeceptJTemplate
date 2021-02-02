const { I, mainPage } = inject();

module.exports = {
    upcomingMenu: ('Upcoming'),
    kukushechka(username, password) {
        mainPage.login('demo','demo');
    },

    gotoUpcoming() {
        I.click(this.upcomingMenu);
    },
}
