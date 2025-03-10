console.log("#5. JavaScript homework example file");

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

const counter = (function () {
  let count = 0;

  return function (n) {
    if (n !== undefined) {
      count = n;
    }

    return count++;
  };
})();

console.log("#1", counter()); // 0
console.log("#1.2", counter()); // 1
console.log("#1.3", counter(100)); // 100
console.log("#1.4", counter()); // 101
console.log("#1.5", counter()); // 102
console.log("#1.6", counter(500)); // 500
console.log("#1.7", counter()); // 501
console.log("#1.8", counter()); // 502
console.log("#1.9", counter(0)); // 0
console.log("#1.10", counter()); // 1
console.log("#1.11", counter()); // 2

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

const counterFactory = (function () {
  let count = 0; // Початкове значення

  return {
    value(n) {
      if (n !== undefined) {
        count = n;
      }
      return count;
    },
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
  };
})();

console.log("#2", counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log("#2.1", counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log("#2.2", counterFactory.value()); // 1
console.log("#2.3", counterFactory.value(100)); // 100
counterFactory.decrement();
console.log("#2.4", counterFactory.value()); // 99
console.log("#2.5", counterFactory.value(200)); // 200
counterFactory.increment();
console.log("#2.6", counterFactory.value()); // 201

/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */

const myPrint = (a, b, res) => `${a}^${b}=${res}`;
const myPow = (a, b, myPrint) => {
  if (b === 0) return myPrint(a, b, 1);

  if (b > 0) {
    const res = a * myPow(a, b - 1, (a, b, res) => res);
    return myPrint(a, b, res);
  }

  const res = 1 / myPow(a, -b, (a, b, res) => res);
  return myPrint(a, b, res);
};

console.log("#3", myPow(3, 4, myPrint)); // 3^4=81
console.log("#3.1", myPow(2, 3, myPrint)); // 2^3=8
console.log("#3.2", myPow(2, 0, myPrint)); // 2^0=1
console.log("#3.3", myPow(2, -2, myPrint)); // 2^-2=0.25

/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

const list = [8, 16, 32, 64, 128, 256, 512];
const myMax = (arr) => Math.max.apply(null, arr);

console.log("#4", myMax(list)); // 512

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

const myMul = (a, b) => a * b;
console.log("#5", myMul(8, 16)); // 126
console.log("#5.1", myMul(32, 64)); // 2048

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

const myDouble = myMul.bind(null, 2);

console.log("#5.2", myDouble(8)); // 16
console.log("#5.3", myDouble(16)); // 32
console.log("#5.4", myDouble(32)); // 64

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

const myTriple = myMul.bind(null, 3);

console.log("#5.5", myTriple(8)); // 24
console.log("#5.6", myTriple(16)); // 48
console.log("#5.7", myTriple(32)); // 96

// export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }
