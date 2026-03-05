/**
 * @name Enum
 * @description Набор числовых данных описанный с помощью строковых констант
 * списком перечисления и определяемая такими примитивными типами, как number и string .
 * @see https://bit.ly/3dfcZLw
 */
enum Frameworks {
  Angular = "Angular", // 0
  React, // 1
  Vue, // 2
  Svelte, // 3
}
console.log(Frameworks);

let currentFramework: string;
let frameWorkId: number;

// console.log(Frameworks.React)
// currentFramework = Frameworks[Frameworks.React];
// frameWorkId = Frameworks.React;
// console.log(Frameworks[Frameworks.React]);

// Числове значения
enum Code {
  Ok = 200,
  BadRequest = 400,
}

// console.log(Code.Ok);

// Строковые значения
enum FruitColors {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}

// const f = {
//   Red: '#ff0000',
// }

console.log(FruitColors);

// Индексы
enum Currency {
  USD = 1, // 1
  EUR, // 2
  RUR = 4,
  GBP, // 5
}

// console.log(Currency)
// console.log(Object.values(Currency));

// let gbp: 4;
// let gbp: 5;
// gbp = Currency.RUR;

// Псевдоним
enum ApprovalStatus {
  draft,
  submitted,
  approved,
  rejected,
  fail = rejected,
}

// console.log(ApprovalStatus.fail === ApprovalStatus.rejected);

/**
 * Перечисление enum объявленное с помощью ключевого слова const после
 * компиляции не оставляет в коде привычных конструкций.
 */
{
  const enum Color {
    Apple = "green",
  }
  let colorApple = Color.Apple;

  // console.log(Color);
  console.log(Color);
}
