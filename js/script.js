'use strict';

let money = +prompt('Ваш бюджет на месяц', ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '2021-07-27');

console.log(money);
console.log(time);

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

 for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = +prompt('Во сколько обойдется?', '');
	if ( (typeof(a)) === 'string' &&  /* эта проверка по факту не нужна, 
	т.к. что бы не ввели будет всё равно стринг  */
	( typeof(a)) != null &&   // !=null если поль-ль не нажал кнопку отмена 
	( typeof(b)) != null &&
	a != '' && 
	b !='' && 
	a.length < 50 ) {
		console.log('Добавлена статья!');
		appData.expenses[a] = b;
	} else {
		i--;
	}
} 

/* let i = 0;
while ( i < 2 ) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = +prompt('Во сколько обойдется?', '');
	if ( (typeof(a)) === 'string' &&
	( typeof(a)) != null &&   
	( typeof(b)) != null &&
	a != '' && 
	b !='' && 
	a.length < 50 ) {
		console.log('Добавлена статья!');
		appData.expenses[a] = b;
	} else {
		i--;
	}
	i++;
} */

/* let i = 0;
do {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = +prompt('Во сколько обойдется?', '');
	if ( (typeof(a)) === 'string' &&  
	( typeof(a)) != null &&  
	( typeof(b)) != null &&
	a != '' && 
	b !='' && 
	a.length < 50 ) {
		console.log('Добавлена статья!');
		appData.expenses[a] = b;
	} else {
		i--;
	}
	i++;
} 
while (i < 2); */



appData.moneyPerDay = appData.budget/30;

console.log(appData);

alert('Ваш бюджет на первый день = ' + appData.moneyPerDay + ' рублей');

if(appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}