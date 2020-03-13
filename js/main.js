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
    };



    for (let i = 0; i < 2; i++) {

        let a = prompt('Введите обязательную статью расходов в этом месяце');
        let b = +prompt('Во сколько обойдется?');

        if ((typeof (a) === 'string') && (a != null) && (b != null) && (a != '') && (b != '')) {
            appData.expenses[a] = b;
        }

    }    

    // console.log(appData);

    // ------------------------------------------------------------------------------------------------------------------------------- //



    // function showFirtsMessage(msg) {
    //     alert(msg);
    // }

    // showFirtsMessage('Превет');

    // function calc(a, b) {
    //     return (a + b);
    // }




    // let calc = (a, b) => (a + b);

    // alert(calc(100, 200));

    function detectDayBudget() {
        appData.moneyPerDay = appData.budget / 30;
        alert('Бюджет на день - ' + appData.moneyPerDay.toFixed(2));
    }


    function checkSavings() {
        if (appData.saving) {
            let save = +prompt('Какова сумма накоплений?');
            let percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита ' + appData.monthIncome.toFixed(2));
        }
    }

    function detectLevel() {
        if (appData.moneyPerDay < 100) {
            console.log('Нищеброд 80 лвл');
        } else if ((appData.moneyPerDay > 100) && (appData.moneyPerDay < 200)) {
            console.log('Россиянец');
        } else {
            console.log('Буржуй');
        }
    }

    function chooseOptExpenses() {
        for (let i = 1; i < 4; i++) {
            let answer = prompt('Статья необязательных расходов?');

            appData.optionalExpenses[i] = answer;
        }
    }

    checkSavings();
    detectDayBudget();
    detectLevel();
    chooseOptExpenses();


    console.log(appData.optionalExpenses);
    

    


};

