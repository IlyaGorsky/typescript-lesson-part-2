/**
 * @name Unknown
 * @description Тип является типобезопасным аналогом типа any и представлен в виде
 *  литерала unknown . Все типы совместимы с типом unknown , в то время как сам тип
 *  unknown совместим только с самим собой и типом any
 *  ВАЖНО: над типом unknown запрещено выполнение каких-либо операций.
 */

{
  let value: unknown;

  value = true;
  value = 42;
  value = "Hello World";
  value = [];
  value = {};
  value = Math.random;
  value = null;
  value = undefined;
  value = new TypeError();
  value = Symbol("type");
}

{
  let value: unknown;

  let value1: unknown = value;
  let value2: any = value;
  let value3: boolean = value;
  let value4: number = value;
  let value5: string = value;
  let value6: object = value;
  let value7: any[] = value;
  let value8: Function = value;
}

{
  let value: unknown;
  value.foo.bar;
  typeof value === "number" && value.toFixed();
  value();
  new value();
  value[0][1];
}
