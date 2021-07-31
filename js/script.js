'use strict';

var money = prompt('Ваш бюджет на месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2021-07-27');

console.log(money);
console.log(time);

var appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

/* var a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдется?', ''); */

appData.expenses [
    prompt('Введите обязательную статью расходов в этом месяце', '')
] = prompt('Во сколько обойдется?', '');
appData.expenses [
    prompt('Введите обязательную статью расходов в этом месяце', '')
] = prompt('Во сколько обойдется?', '');

console.log(appData);

alert('Ваш бюджет на первый день = ' + appData.budjet/30 + ' рублей');