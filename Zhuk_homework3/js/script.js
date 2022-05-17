// Task 1

// function max(a, b) {
//     return a > b ? a : b;
// }




// Task 2

// function pow(x, n) {
//     if (n < 1) {
//         console.log('Значение n должно быть больше 0');
//     }

//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }



// Task 3

// function howManyDays(month) {
//     let days;
//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             days = 31;
//             break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             days = 30;
//             break;
//         case 2:
//             days = 28;
//             break;
//     }
//     return days;
// }

// Task 4

// function showMessageTypeNum(a, b, showMessageEvenNum, showMessageOddNum) {
//     let mult = a * b;

//     if (a === 0 || b === 0) {
//         console.log('Это число 0');
//     } else if (mult % 2 === 0) {
//         showMessageEvenNum();
//     } else {
//         showMessageOddNum();
//     }
// }

// function showMessageEvenNum() {
//     console.log('Это число четное');
// }

// function showMessageOddNum() {
//     console.log('Это число нечетное');
// }


// Task 5

// let number = +prompt('Введите число от 1 до 18');

// if (number < 1 || number > 18 || number === null || isNaN(number)) {
//     console.log('Введено неверное значение');
// } else {
//     for (let i = 1; i <= number; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }