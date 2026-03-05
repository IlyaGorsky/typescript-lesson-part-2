/**
 * @name Void
 * @description Можно назвать полной противоположностью типа any , так как этот
 * тип означает отсутствие конкретного типа. Основное предназначение типа Void — явно
 * указывать на то, что у функции или метода отсутствует возвращаемое значение.
 * Тип void является подтипом any и супертипом для null и undefined
 */
let someFn = () => {};
let analytics = {
  send(): void {},
};
let result: void = someFn();

console.log(void 0);
console.log(result);
