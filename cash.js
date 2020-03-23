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
saving: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function detectedDayBudjet() {
    appData.moneyPerDay = (appData.budjet/30).toFixed(1);

    alert('Ежедневный бюджет: ' + appData.moneyPerDay);

}
detectedDayBudjet();


function detectedLevel() {
    if (appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка');
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            alert('Средний уровень достатка');   
        }else if (appData.moneyPerDay > 2000){
        alert('Высокий уровень достатка');
        } else {
        alert('Ошибка данных');
        }
}
detectedLevel();

function savinigInMonth() {
    if (appData.saving == true) {
        let save = +prompt('Сколько у Вас есть накоплений?'),
            percent = prompt('Под какой процент?');
        
        appData.savingMonth = save/100/12*percent;
        alert('В месяц ' + appData.savingMonth);
    }

}

savinigInMonth();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let ask = +prompt('Статья необязательных расходов?');
        appData.optionalExpenses[i] = ask;
        console.log(appData.optionalExpenses);
    }

}
chooseOptExpenses();


