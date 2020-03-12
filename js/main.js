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

    let money = +prompt('Ваш бюджет на месяц?');
    let time = +prompt('Введите дату в формате YYYY-MM-DD');
    let value;

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false,
    };



    for (let i = 0; i < 2; i++) {

        let a = prompt('Введите обязательную статью расходов в этом месяце');
        let b = +prompt('Во сколько обойдется?');

        if ((typeof(a) === 'string') && (a != null) && (b != null) && (a != '') && (b != '')) {
            console.log(6666);
            
            appData.expenses[a] = b;
        }

    }



    alert('Статья расходов - ' + appData.expenses.a);
    alert('Будет стоить - ' + appData.expenses.b);

};

