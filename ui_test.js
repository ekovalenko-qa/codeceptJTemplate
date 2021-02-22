Feature('Тесты для https://idemo.bspb.ru/');

Before(({ mainPage }) => {
    mainPage.login();
});

Scenario('1. Пользователь может авторизоваться', ({ I}) => {
    I.see('Hello World!');
});

Scenario('2. Пользователь может получить выписку по счету', ({ I, myPage }) => {
    myPage.getCountStatement();
    I.see('Выписка');
});

Scenario('3. Пользователь может открыть вклад', ({ I, myPage, depositsPage }) => {
    myPage.goToDeposits();
    depositsPage.createAccount();
    I.see('Вклад открыт.');
});

Scenario('4. Пользователь может получить реквизиты зарплатного счета', ({ I, myPage }) => {
    myPage.getMainStatementDetails();
    I.see('Реквизиты для безналичного перечисления');
});

Scenario('5. Пользователь может посмотреть персональные предложения', ({ I, myPage }) => {
    myPage.goToOffer();
    I.see('Персональные предложения');
});

Scenario('6. Пользователь может посмотреть условия карты', ({ I, myPage }) => {
    myPage.goToCards();
    I.see('Золотая');
});
