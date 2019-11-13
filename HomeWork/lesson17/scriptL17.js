"use strict"
 //1. Напишите выражение, которое посчитает и выведет в консоль сколько секунд в 3 часах.
let seconds_In_Third_Hours;
let our_Hours = 3;
let minuts_In_One_Hour = 60;
let seconds_In_One_Minut = 60;
    seconds_In_Third_Hours = our_Hours * minuts_In_One_Hour * seconds_In_One_Minut;
    console.log(seconds_In_Third_Hours);

 /*    2. Переделайте операторы в краткую форму записи для данных выражений: 
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num); */

let num = 1;
num += 12;
num -= 14;
num *=  5;
num /= 7;
num += 1;
num -= 1;
alert(num);

//3.  Создайте переменные a=10, b=2 и c=5. Выведите в консоль их сумму.

let a = 10, b = 2, c = 5;
console.log(a + b + c);

/* 4. Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
запишите в переменную result. Выведите в консоль значение переменной result. */
 
let a = 14;
let b = 10;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result);

//5. Создайте переменную name и присвойте ей ваше имя. Выведите в консоль фразу 'Привет, %Имя%!'.

let name = 'Sergiy';
console.log("Привет, " + "%" + name + "%!");