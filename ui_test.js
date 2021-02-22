const assert = require('assert');

Feature('Тесты для https://idemo.bspb.ru/');

// Scenario('1. Пользователь может авторизоваться', ({ I, mainPage }) => {
//     mainPage.login();
//     I.see('Hello World!');
// });
//
// Scenario('2. Пользователь может получить выписку по счету', ({ I, mainPage, myPage }) => {
//     mainPage.login();
//     myPage.getCountStatement();
//     I.see('Выписка');
// });
//
// Scenario('3. Пользователь может открыть вклад', ({ I, mainPage, myPage, depositsPage }) => {
//     mainPage.login();
//     myPage.goToDeposits();
//     depositsPage.createAccount();
//     I.see('Вклад открыт.');
// });

Scenario('4. Пользователь может поменять валюту', ({ I, mainPage, myPage, currencyPage }) => {
    mainPage.login();
    myPage.goToCurrency();
    currencyPage.changeCurrency();
    I.see('Обмен валюты успешно совершен');
});

// Scenario('5. Пользователь может получить реквизиты зарплатного счета', ({ I, mainPage, myPage }) => {
//     mainPage.login();
//     myPage.getMainStatementDetails();
//     I.see('Реквизиты для безналичного перечисления');
// });
