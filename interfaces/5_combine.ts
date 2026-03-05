/**
 * Комбинация интерфейсов
 */
interface ShapeColor {
  color: string;
}

interface PenStroke {
  penWidth: number;
}


interface Square extends ShapeColor, PenStroke {
  sideLength: number;
}

let square: Square;

square = {
  color: "blue",
  sideLength: 10,
  penWidth: 5,
};
