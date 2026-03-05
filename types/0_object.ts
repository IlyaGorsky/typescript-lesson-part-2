/**
 * @name Object
 * @description Ссылочный тип данных Object является базовым для всех ссылочных типов в TypeScript.
 *              Идентичен по своей работе одноименному типу из JavaScript.
 */
let simpleObject: object;

simpleObject = {};
// simpleObject = 5;
// simpleObject = true;

// simpleObject = null; // Error, strictNullChecks = true

let student: { id: number; firstName: string; lastName: string; phone?: string };

// student = {
//   id: 1,
//   firstName: "Ilya",
//   lastName: "Gorskiy",
//   phone: "777 77 77",
// };

let studentPhone: string;

// if (student.phone) {
//   studentPhone = student.phone;
// }

// let isObject: object = student;
