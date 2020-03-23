let money, time;

function start() {
money = +prompt('Ваш бюджет на месяц?');
time = prompt('Введите дату в формате YYYY-MM-DD');

while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

let appData = {
budjet: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income : [],
saving: true,
chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = prompt('Во сколько обойдется?');
    
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;  
            alert('done');      
        } else {
            i--;
        }
    }
},
detectedDayBudjet: function() {
    appData.moneyPerDay = (appData.budjet/30).toFixed(1);

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
},
detectedLevel: function() {
    if (appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка');
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert('Средний уровень достатка');   
        }else if (appData.moneyPerDay > 2000){
        alert('Высокий уровень достатка');
        } else {
        alert('Ошибка данных');
        }
},
savinigInMonth: function() {
    if (appData.saving == true) {
        let save = +prompt('Сколько у Вас есть накоплений?'),
            percent = prompt('Под какой процент?');
        
        appData.savingMonth = save/100/12*percent;
        alert('В месяц ' + appData.savingMonth);
    }
},
chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
        let ask = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = ask;
        console.log(appData.optionalExpenses);
    }
},
chooseIncome: function() {
    for (let i = 0; i < 1; i++) {
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');
    if ((typeof(items)) == 'string' && (typeof(items)) != null && items != '') {
    appData.income = items.split(', ');
    appData.income.push = (prompt('Может что-то еще?'));
    appData.income.sort();
    } else {
        i--;
    }
    appData.income.forEach(function(pos, i){
        alert('Способы доп. заработка: ' + (i+1) + ':' + pos);
    });
    }
}
};

 function tryingKey() {
    for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + '-' + appData[key]);
    }
    }
     tryingKey();









