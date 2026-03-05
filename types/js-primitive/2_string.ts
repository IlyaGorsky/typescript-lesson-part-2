/**
 * String
 *
 * @description строки
 */
let Name: string = "Ilya";
let City = "Moscow";

// Преобразование

let Country: string = String("Russia");
// let Country: string = new String('Russia');

function print() {
  return Name + "/" + City + "/" + Country;
}

console.log(print());
