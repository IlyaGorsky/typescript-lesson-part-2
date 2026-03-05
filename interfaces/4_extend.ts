/**
 * Extending Interfaces
 * @description Наследование интефрейсов, работает как наследование классов.
 *              Череез ключевое слово extends
 */
interface ShapeColor {
  color: string;
}

interface ShapePosition {
  x: number;
  y: number;
}

class ShapeColorClass implements ShapeColor {
  constructor(public color: string) {}
}

const someVarColor: ShapeColor = new ShapeColorClass("red");

console.log(someVarColor.color);

class ShapeClass implements ShapeColor, ShapePosition {
  constructor(public x: number, public y: number) {}
  // constructor(public x: number, public y: numbRer, public color: string){}
}
