window.onload = function() {

    'use strict';
    
    let dude = {
        name: 'xxx',
        age: 30,
        isDumbass: true,
    };
    
    console.log(dude.name);

    let arr = ['xxx.png', 'yyy.png', 'sss.jpeg'];

    console.log(arr[1]); 

    let div = document.querySelector('.new');
    let click = document.querySelector('.click');


    click.addEventListener('mouseover', function() {
        div.innerHTML = 'XXX';
    });

    click.addEventListener('mouseout', function() {
        div.innerHTML = 'YYY';
    });   


};

