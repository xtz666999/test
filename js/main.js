window.onload = function() {

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

    let money = +prompt('Month budget?');
    let time = +prompt('Enter date YYYY-MM-DD');
    let value;

    let appData = {
        budget: money,
        timeData: time,
        expenses: {
            key: value,
        },
        optionalExpenses: {},
        income: [],
        saving: false,
    };

    let shoping = prompt('Expenses');
    let howMach = +prompt('How much?');

    appData.expenses.key = shoping;
    appData.expenses.value = howMach;

    alert(appData.expenses.key);
    alert(appData.expenses.value);

};

