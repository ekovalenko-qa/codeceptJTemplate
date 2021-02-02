const assert = require('assert');
const mainPage = require("./pages/Main");
Feature('login');

Scenario('test something', ({ I, currentTasksPage ,mainPage }) => {
    I.amOnPage('https://try.vikunja.io/login');
    mainPage.login('demo','demo');
    I.see('You can use the user');
    I.see('Sign in to your Vikunja account');
    currentTasksPage.gotoUpcoming();
    //currentTasksPage.kukushechka('demo', 'demo');
    //assert.equal(text1,text2);
    I.see('Tasks from');

});
