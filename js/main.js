window.onload = function () {

    // 'use strict';

    // let dude = {
    //     name: 'xxx',
    //     age: 30,
    //     isDumbass: true,
    // };

    // console.log(dude.name);

    // let arr = ['xxx.png', 'yyy.png', 'sss.jpeg'];

    // console.log(arr[1]); 

    // let div = document.querySelector('.new');
    // let click = document.querySelector('.click');


    // click.addEventListener('mouseover', function() {
    //     div.innerHTML = 'XXX';
    // });

    // click.addEventListener('mouseout', function() {
    //     div.innerHTML = 'YYY';
    // });



    // let num = 50;

    // if (num < 49) {
    //     alert('No!');
    // } else if (num > 100) {
    //     alert('Too mach');
    // } else {
    //     alert('YEEEEEEEEE');
    // }

    // (num < 55) ? alert('No!') : alert('YEEEEEEEEE');


    // -------------------------------------------------------------------------------------------------------------------- //






    let money = +prompt('Ваш бюджет на месяц?');
    let time = prompt('Введите дату в формате YYYY-MM-DD');
    let value;

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
            

            // if (items != string || items === '' || items === null) {
            //     alert('Не верные данные');
            // }

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

    console.log(appData.income);

    
    

    // checkSavings();
    // detectDayBudget();
    // detectLevel();
    // chooseOptExpenses();


    // console.log(appData.optionalExpenses);


  
    // let first = function() {
    //     alert(1);
    // };

    // function saySomething(callback) {
    //     setTimeout(function() {
    //         alert(2);
    //     }, 5000);

    //     callback();
    // }   

    // saySomething(first);


    

    // let options = {
    //     width: 1024,
    //     height: 1024,
    //     name: 'test',
    // };


    // console.log(options.name);

    // options.bool = true;
    // options.colors = {
    //     border: 'black',
    //     background: 'red',
    // }

    // let func = function(item) {
    //     alert(item * 10);
    // }
    
    // let arr = [1, 2, 3, 4, 5];

    // arr.forEach(func);

    // let answer = prompt();

    // let arr = [];

    // arr = answer.split(',');

    // console.log(arr);

    // let sol = {
    //     health: 400,
    //     armor: 100,
    // }

    // let one = {
    //     health: 100,
    // }

    // one.__proto__ = sol;

    // console.log(one);
    
    
  
    
    


};

