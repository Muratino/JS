"use strict";

// let category = 'toys';


// console.log(`https://someurl.com/${category}/5`);



const numberOfFlms = +prompt('Скоко фиьмов вы уже посмотреи?', '');

// console.log(numberOfFlms);


const person  = {

    count: numberOfFlms,
    muves: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt('Один из поседних просмотренных фиьмов?', ''),
     b = prompt('На скоько оцените его?', ''),
     c = prompt('Один из поседних просмотренных фиьмов?', ''),
     d = prompt('На скоько оцените его?', '');
     
     
     
     
     
     
person.muves[a] = b;
person.muves[c] = d;

console.log(person);    

// let nl  = 10,
//     dr  = 10;


// nl++;
// dr--;

// console.log(++nl);
// console.log(--dr);


// console.log(5*2 === 10);


// const checed = true,
//     hClose = false;


// console.log(checed || hClose);