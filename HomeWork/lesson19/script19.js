'use strict'
/*6. Выведите в консоли столбец четных чисел в промежутке от 0 до 100. (используя for или while) */

 for (let i = 2; i <= 100; i++){
    if (!(i % 2 == 0)){continue;}
    console.log(i);
}
 
/* 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false. */
 
 function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }
}

console.log(isNumberInRange(8))
 
/* 2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */


function isEven(n){
    if(n % 2 === 0){
    return true;
    }else{
    return false;
    }
}
console.log(isEven(15));
console.log(isEven(16));

//3. Переписать код из конструкции if в switch

/*  let value = +prompt('value?', '');
if (value == 0) {
  alert( 0 );
}
if (value == 1) {
  alert( 1 );
}
if (value == 2 || value == 3) {
  alert( '2,3' );
}
 */
let value = +prompt('Value?', '');

switch (value) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3');
    break;
}

/* 4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b

Пример вызовов: 
min(3, 5) // вернет 3
min(5, -1) // вернет -1 */

   function min(a, b) {
    if (a < b) {
      return a;
    } else if (a > b) {
      return b;
    }else{
      return 'Значения равны';
    }
  }

  console.log(min(3, 5));
  console.log(min(5, -1));
  console.log(min(3, 3)); 

  