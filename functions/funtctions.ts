/**
 * @module function.ts
 * @description Фунцкии в ts
 */

{
  /**
   * Типизация параметра
   */
  function printHelloByName(name: string): void {
    console.log(`Hello wrold, your name: ${name} !`);
  }

  /**
   * Типизация результата
   */
  function getCurrentTime(): number {
    // body ................
    return Date.now();
  }

  // console.log(Date.now())

  /**
   * Значение по умолчанию
   */
  function buildName(firstName = "Will", lastName: string): string {
    return firstName + " " + lastName;
  }
  // let result1 = buildName("Bob"); // error
  // let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
  // let result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
  // let result4 = buildName(undefined, "Adams"); //

  /**
   * Опциональный параметр
   */
  function getPriceByCountry(price: number, countryCode?: "RU"): number {
    if (countryCode === "RU") {
      return price * 0.5 + price;
    }
    return price;
  }

  let res: number = getPriceByCountry(10);
  getPriceByCountry(12, "RU");

  /**
   * Опциональный параметр литерал
   */
  function someFunction(foo: 1, bar?: "bar") {}

  someFunction(1, "bar");
  // someFunction(2);
  // someFunction(1, "baz")

  // Типизированный spread + tuple
  function spreadFn(foo, ...rest: [{ id: string }, { id: {} }, ...number[]]) {
    rest[0].id + rest[3];
    // rest[1].id + rest[3]
  }

  // Алиас для функции
  type SomeFunction = (a: number, b: number) => number;

  let fn2: SomeFunction = (a, b) => a + b;

  // Аннотация типа для функции
  let fn: (a: number, b: number) => number;
  fn = (a, b) => a + b;
}
