"use strict";











//Факториал и то как его сделать 
// function factorial(n) {
    // if (typeof(n) !== 'number' || !Number.isInteger(n)) {
    //     return "Ошибка, проверьте данные";
    // }

    // if (n >= 1) {
    //     return n * factorial(n - 1);
    // } else {
    //     return 1;
    // }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    // return n ? n * factorial(n - 1) : 1;
// }

// factorial(5);

// console.log(factorial(5));








// let students = {
//     js: [{
//         name: 'Jhon',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html:{
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [ {
//                 name: 'Test',
//                 progress: 100
//             }]
//         }   
//     }
// };



//Цыкл по типу рекурсии 

// function getTotalProgress1 (data){

//     let total = 0,
//         students = 0;

//         for( let course of Object.values(data)) {
//             if (Array.isArray(course)) {
//                 students += course.length;
                
//                 for(let i = 0; i < course.length; i++){
//                     total += course[i].progress;
//                 }
//             }else {
//                 for( let subCourse of Object.values(course)) {
//                     students += subCourse.length;
//                     for(let i = 0; i < subCourse.length; i++){
//                         total += subCourse[i].progress;
//                     }
//                 }
//             }

//         }
       
//         return total / students;
// }
// console.log( getTotalProgress1(students));


// function pow(x, n) {
//     let result = 1;

//     for(let y = 0; y < n; y++){
//         result *= x;
//     }
    
//     return result;
// }






//Рекурсия 


// function getTotalProgressByRecursion(data) {
    //// Если это массив то тогда идет проверка и перебор 
//     if (Array.isArray(data)) {
//        let total = 0;

                        
//          for(let i = 0; i < data.length; i++){
//              total += data[i].progress;
//          }

//          return [total, data.length];
//     } else {
    //// Если это не массив то тогда сами его формируем и идет работа 
//         let total = [0, 0];

//         for ( let subDate of Object.values(data)) {

//            const subDataArr = getTotalProgressByRecursion(subDate);
//            total[0] += subDataArr[0];
//            total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);


// function pow(x, n) {
//     if( n === 1){
//         return  x;
//     } else  {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2 ,2 );
// pow(3 ,3 )
// pow(4 ,4 )  











//Д/з по уроку 

// const promoAdv = document.querySelectorAll('.promo__adv img'),
//     promoGenre = document.querySelector('.promo__genre'),
//     promoBg = document.querySelector ('.promo__bg'),
//     promoList = document.querySelector('.promo__interactive-list');
//     

// promoAdv.forEach( tmes => { 
//      tmes.remove();
// });

// promoGenre.textContent = "Драма";
// promoBg.style.cssText = 'background: url(../img/bg.jpg); background-position: top;';



// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// promoList.innerHTML = ""; 
// movieDB.movies.sort();

// movieDB.movies.forEach ((flim, y ) => {
//     promoList.innerHTML +=  `
//     <li class="promo__interactive-item">${y + 1} ${flim}
//         <div class="delete"></div>
//     </li>
//     `;
// });












//Событие!!

// const btns = document.querySelectorAll('button'),
//     box = document.getElementById('box'),
//     overlay = document.querySelector('.overlay');
  



// Устарелый способ!!
// btns.onclick  = function () {
//     alert("Booomm!!");
// };



//Нажатие на кнопку!
// btns.addEventListener( 'click', () => {
//     alert("Booomm!!");
// });




//Навод мыши! Событие!!
// box.addEventListener('mouseenter' , (event) => {
//  // console.log(event);
//     event.target.remove();

// });

// let y  = 0;
// const deletElement = (event) => {
//     console.log(event.target);
//     console.log(event.type);

    // y++;
    // if( y == 3){
    //     btns.removeEventListener('click', delet);
    // }
// };

// btns.addEventListener('click', delet);
// overlay.addEventListener('click', delet);


//Перебор querySelectorAll и использование на всех элементах одно и то же событие
  
// btns.forEach (btn => {
//     btn.addEventListener('click', deletElement, {once: true});
// });




//Отключить стандартное поведение гугл страницы
// const lync = document.querySelector('a');
// lync.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);

// });






// const box = document.getElementById('box'),
//     btns = document.getElementsByClassName('button'),
//     circle = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     One = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '400px';

// btns[1].style.width = '100px';
// btns[1].style.backgroundColor = 'red';

// box.style.cssText = 'background-color: green';

// for (let y = 0; y < btns.length; y++){
//     btns[y].style.backgroundColor = 'blue';
// }

// hearts.forEach( tmes => {

//     tmes.style.backgroundColor = 'blacK';
// });

// const div = document.createElement('div'); 
// const text = document.createTextNode('Тут чет есть');

// div.classList.add('black');





// Добавить в конце/в начале какого то элемента
// wrapper.append(div);
// wrapper.prepend(div);


// Добавить перед/после какого то элемента
// hearts[0].before(div);
// hearts[0].after(div);


// Удаление элементов из страницы
// circle[0].remove(); 


// Замена какого то элемента на странице
// hearts[0].replaceWith(circle[0]);



// Только для HTML структур
// div.innerHTML = "<h1> Hello world </h1>"; 
// div.style.cssText = 'background-color: #2E2E2E; width: 550px; margin-top: 50px; color: #2E9D20;';


// afterbegin| afterend| beforeend| beforebegin
// div.insertAdjacentHTML("beforebegin", '<h2> Hello </h2>');


// Только для Текстового взаимодействие/взаимодействие с поьзыватеем
// div.textContent = 'Hello world';

// const front = document.createElement('div');
// wrapper.append(front);
// front.classList.add('ret');
// front.innerHTML = "<h1> Boooommm!! </h1>"; 
// front.style.cssText = 'background-color: #2E2E2E; width: 550px; height: 50px; margin-top: 50px; color: #2E9D20; 
// front.style.backgroundColor = "backgroundColor: #2E2E2E";











//Обращение к странице
// const box = document.getElementById('box');
// console.log(box);



// const btns = document.getElementsByTagName('button');
// console.log(btns[1]);

// const circle = document.getElementsByClassName('circle');
// console.log(circle[1]);

// const heart = document.querySelectorAll('.heart');
// console.log(heart);

// heart.forEach( tmes => {
//     console.log(tmes);

// });

// const One = document.querySelector('.heart');
// console.log(One);








//Д/з Тест!!

//1)
//  let x = 5;
// alert (x++);
// 5

//  let x = 5;
// alert (++x)

//6


//2)
//  [] + false - null + true;
// console.log([] + false - null + true);

// NaN


//3)

// let y = 1;
// let x = y;
//     x = 2;
// alert (x);

// 2


// 4)

// [] + 1 + 2; 
// console.log([] + 1 + 2);
// 12 (String)

// 5)

// alert("1"[0]);

// 1


// 6)

// 2 && 1 && null && 0 && undefined
// console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи
// ИЛИ  запинается на правде
// null


// 7)

// !!(a && b) (a && b);
// console.log(!!(1 && 2) (1 && 2));

// false


// 8)

// alert (null || 2 && 3 || 4 );

// 3


// 9)

// const a = [a, b, c ];
// const b = [a, b, c ];
// console.log( a === b );
// NO. a і b raznіe masіvu


// 10)
// alert(+"Ynfynyty");

// Ynfynyty
// typeof = Number


// 11)

// "Что то" > "кто то";
// console.log("Что то" > "кто то");
// false


// 12)

// 0 || "" || 2 || undefined || true || false
// console.log(0 || "" || 2 || undefined || true || false);

// 2

















//To String

//1)

// console.log(typeof(String(null)));
// console.log(typeof(String(4444)));



//2)

// console.log(typeof(5 + ''));

// const num =  5;
// console.log("https://google.com/" + num);

// const font = 20 + 'px';



// To Number 

//1)

// console.log(typeof(Number('4444')));

// //2)

// console.log(typeof(+ '5'));


// //3)

// console.log(typeof(parseInt('15px', 10)));



// const ancer = +prompt("Hello world!");



// // To boolean 

// // 0, "", null, undefined, NaN; - false


// //1)

// let swtch = null;

// if ( swtch) {
//     console.log('Worcyng...');
// }

// swtch = 1;

// if ( swtch) {
//     console.log('Worcyng...');
// }



// //2)

// console.log(typeof(Boolean('4')));

// //3)


// console.log(typeof(!!'333'));














//Прототепированние/


// const solder = {
//     healts: 400,
//     armor: 100
// };

// const jonh = Object.create(solder);
// console.log(jonh.armor);

// const jonh = {
//     // healts: 100,
// };

// Object.setPrototypeOf(jonh, solder);

// console.log(jonh.healts);














// const numbers = {
//     a: 20,
//     b: 40,
//     c: 100
// };

// const add = {
//     d: 2,
//     g: 5,
//     l: {
//         f: 14,
//         r: 70
//     }

// };



// // Копирование!
// const clon = Object.assign({}, add);

// clon.d = 20;

// console.log(add);
// console.log(clon);



// // Копирование в масивах!
// const frec = ['a', 'b', 'c'];
// const cleant = frec.slice();

// cleant[1] = 'adfldsfad'; 
// console.log(frec);
// console.log(cleant);



// const nam = ['Andrey', 'Dyma', 'Lexa', 'Angela'],
//     age = [12, 15, 17, 20],
//     allinfo = [...nam, ...age];


// console.log(allinfo);


// function log (a, b, c ) {
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }


// const bum = [2, 7, 10 ];

// log(...bum);



// const ry = ["a", "b"];

// const newRy = [...ry];

// console.log(ry);
// console.log(newRy);

















// const nw = [1, 22, 35, 14, 54, 10,];
// nw.sort();
// console.log(nw);

// function RTE (a, b) {
//     return a - b;
// }

// nw.forEach(function(tems, y, nw,){
//     console.log(`${tems}: ${y} внутри массива ${nw}`);
// });


// nw.push(10);

// console.log(nw);

// for (let arr = 0; arr < nw.length; arr++ ){
//     console.log(nw[arr]);
// }

// for (let vale of nw) {
//     console.log(vale);
// }  







// const str = prompt("", "");
// const product = str.split(", ");
// console.log(product);

// const str = prompt("", "");
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '));












// const opts = {
//     name: 'test',
//     with: 1024,
//     height: 1024,
//     colors: {
//         border: 'blacK',
//         bg: 'red'
//     },
//     maceTest: function () {
//         console.log('Test');
//     }

// };

// opts.maceTest();




//Перебор ключей
// console.log(Object.keys(opts).length);
// console.log(opts.name);




// let com = 0;

// for (let Key in opts) {
//     if (typeof(opts[Key]) === 'object') {
//         for ( let tey in opts[Key] ) {
//             console.log(`Свойство ${tey} имеет значение ${opts[Key][tey]}`);
//             com++;
//         }
//     }else {
//         console.log(`Свойство ${Key} имеет значение ${opts[Key]}`);
//         com++;
//     }
// }
// console.log(com);









// const wer = {
//         name: 'Murat',
//         secName: 'Brunylov',
//         age: 30,
//         gender: 'male',
//         family: 'no family',
    
//     };
    
    
    
//     // console.log(wer);
    
//     function info (callback){
//         console.log('Такие свойста:');
//         callback();
//     }
    
//     function hall () {
    
//         for ( let test in wer) {
//             console.log(` ${wer[test]}`);
        
//         }
//         console.log(`Всего строк: ${Object.keys(wer).length}`);
//     }
    
//     info ( hall);












//callback Функции

// function first(){


//     setTimeout(function(){

//         console.log(1);
//     },  500); 
// }



// function second (){
//     console.log(2);
// }

// first();
// second();


// function learn (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learn ('JavaSrlpt', function() {

//     console.log("Я преще этот урок!");
// });


// function don (){
//     console.log("Я прощев этот урок!");
// }
// learn('JavaSrlpt', don);



















//Д/з задание!!

// const person  = {

//     count: 0,
//     muves: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         person.count = +prompt('Скоко фиьмов вы уже посмотреи?', '');
    
//         while( person.count  == '' ||  person.count  == null || isNaN( person.count  )) {
//             person.count  = +prompt('Скоко фиьмов вы уже посмотреи?', '');
//         }
    
//     },
//     remeberMyFlma: function () {

//         for ( let h = 0; h < 2; h++ ) {
//             const a = prompt('Один из поседних просмотренных фиьмов?', ''),
//                  b = prompt('На скоько оцените его?', '');
    
    
//             if ( a != null  && b != null && a != '' && b != '' && a.length < 50) {
//                     person.muves[a] = b;
//                     console.log('done');
//             } else {
//                     console.log('Error');
//                     h--;
//                 }
    
                
//          }
//      }, 
//      datectPersLevel: function () {
//         if (person.count < 10) {
//             console.log("Ты Хиляк!");
//         } else if ( person.count >= 10 && person.count < 30) { 
//            console.log("Норм типок!");
//         } else if ( person.count >= 30 ) {
//            console.log("Ты задрот!!!");
//         } else{
//             console.log("Error");
//         }
//     },

//     showMyDB: function (){
//         if(person.privat != false ){
//             console.log(person);
//         }
//     },


//      toggleVisibleMyDB: function () {

//         if(person.privat ){
//             person.privat = false;

//         } else {
//             person.privat = true;   
//         }
    
//     },
    
//     // toggleVisibleMyDB();

//     writeYourGenres: function (){
//         for (let R =1; R <= 3; R++ ) {
//             let gener = prompt(`Ваш любимый жанр под номером ${R}`);
            
//             if (gener === '' || gener == null ){
//                 console.log("Вы какое то говно!");
//                 R--;
//             }else {
//                 person.genres[R - 1] = gener;   
//             }       
//         }

//         person.genres.forEach ((tme, R) => {

//             console.log(`Любимый жанр ${R + 1} - это ${tme}`);

//         });
//     },   
// };
















// const str = "test"; 
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);



// const free = "Some free";

// console.log(free.indexOf("free"));


// const logg = "Hello WORld";

// console.log(logg.substring(6, 11),);
// console.log(logg.slice(6, 11),);
// console.log(logg);

// console.log(logg.substr(6, 5),);


// const num = 12.5;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));




// function rte () {
//     logg.toLowerCase();
//     logg.slice(6, 11);
// }
// console.log(rte);
// console.log(logg.slice(6, 11),);
// console.log(logg);













// let num = 20;

// function showFee (text) {
//     console.log(text);
//      num = 110;
// }


// showFee ("hello World");

//  console.log(num);

//  let RTE = function () {
//     console.log("hay, Murat:3");
//  };


//  RTE();

//  console.log(5 + 5);
//  const calc = ( a, b ) =>  a + b;
 
 
// function Y (a, b) {

//     return (a + b);
// }  


// console.log(Y(5 , 5));
// console.log(Y (4, 10));
// console.log(Y(20 , 11));



// if ( 6 == 6) {
//     alert('Правда');
// } else {
//     alert('Не правда');
// }


    // let num = 50;

    // while (num <= 55) {
    //     console.log(num);
    //     num++;
    // }

    // let num = 50;


    // do  {
    //     console.log(num);
    //     num++;
    // }

    // while (num <= 55);


    // for (let a = 2; a < 10; a++){

    //     if(a == 7) {
    //         break;
    //     }
    //     console.log(a);
    // }









// let category = 'toys';


// console.log(`https://someurl.com/${category}/5`);






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