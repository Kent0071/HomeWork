'use strict'
/* 1. Задание: Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. 

Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Главное условие, чтобы функция работала быстро. */

function fib(n){
    let a = 1;
    let b = 1;
    for(let i = 3; i <= n; i++){
        let c = a + b;
            a = b;
            b = c;
    }
    return b;
}

console.log(fib(4));
console.log(fib(7));
console.log(fib(72));



/* 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
Посчитайте количество итераций, необходимых для этого (итерация - 
это проход цикла), и запишите его в переменную num. */
let num = 0
for( let n = 1000; n > 50; n /= 2){
    num++;
    console.log(n);
}
console.log('Cумма '+ num);