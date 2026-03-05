/**
 * @name BigInt
 * @description — примитивный числовой тип позволяющий безопасно работать с числами
 * произвольной точности, в том числе значениями выходящими за пределы установленные типом Number.
 */
let SomeBigInt: BigInt; // явное приведение типа
let NumberBigInt = 9007199254740991n; // не явное приведение типов

let ManyBigInt: BigInt = BigInt(Number.MAX_VALUE) + NumberBigInt;

// console.log(ManyBigInt); // 9007199254740
