window.onload = function () {

    let money = +prompt('Ваш бюджет на месяц?');
    let time = prompt('Введите дату в формате YYYY-MM-DD');

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: true,
        chooseExpenses: function() {
            for (let i = 0; i < 2; i++) {

                let a = prompt('Введите обязательную статью расходов в этом месяце');
                let b = +prompt('Во сколько обойдется?');
        
                if ((typeof (a) === 'string') && (a != null) && (b != null) && (a != '') && (b != '')) {
                    appData.expenses[a] = b;
                }        
            } 
        },
        detectDayBudget: function() {
            appData.moneyPerDay = appData.budget / 30;
            alert('Бюджет на день - ' + appData.moneyPerDay.toFixed(2));
        },
        detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log('Нищеброд 80 лвл');
            } else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 200)) {
                console.log('Россиянец');
            } else {
                console.log('Буржуй');
            }
        },
        checkSavings: function() {
            if (appData.saving) {
                let save = +prompt('Какова сумма накоплений?');
                let percent = +prompt('Под какой процент?');
    
                appData.monthIncome = save / 100 / 12 * percent;
                alert('Доход в месяц с вашего депозита ' + appData.monthIncome.toFixed(2));
            }
        },
        chooseOptExpenses: function() {
            for (let i = 1; i < 4; i++) {
                let answer = prompt('Статья необязательных расходов?');
    
                appData.optionalExpenses[i] = answer;
            }
        },
        chooseIncome: function() {
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)'); 

            console.log(typeof items);            

            this.income = items.split(', ');
        },
        kindOfIncome: function() {
            this.income.forEach(this.callback);
        },
        callback: function(item) {
            alert(item);
        }
    };

    appData.chooseIncome();
    appData.kindOfIncome();

};

