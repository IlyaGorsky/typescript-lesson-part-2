/**
 * @name Symbol
 * @description Примитивный тип Symbol предоставляет уникальные идентификаторы, которые при
 *              желании могут использоваться в качестве индексируемых членов объекта
 */
let someSymbol: symbol = Symbol("__meta__");
const uniqKey = Symbol("__meta__"); // тип будет выведен явно
let someObject = {
  [uniqKey]: "hashMeta",
};
let hash: string = someObject[uniqKey];
