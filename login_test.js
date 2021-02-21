const assert = require('assert');

Feature('Тесты для https://idemo.bspb.ru/');

Scenario('1. Пользователь может авторизоваться', ({ I, mainPage }) => {
    I.amOnPage('https://idemo.bspb.ru/');
    mainPage.login();
    I.see('Hello World!');
});

Scenario('2. Пользователь может получить выписку по счету', ({ I, mainPage, currentTasksPage }) => {
    I.amOnPage('https://idemo.bspb.ru/');
    mainPage.login();
    currentTasksPage.getCountStatement();
    I.see('Выписка');
});

Scenario('3. Пользователь может открыть вклад', ({ I, mainPage, currentTasksPage, depositsPage }) => {
    I.amOnPage('https://idemo.bspb.ru/');
    mainPage.login();
    currentTasksPage.goToDeposits();
    depositsPage.createAccount();
    I.see('Открыть новый вклад');
});
