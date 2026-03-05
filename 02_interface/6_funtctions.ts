/**
 * Function
 * @description Интерфейсы способны описывать типы функций
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// let mySearch: SearchFunc;
// mySearch = 1;
// mySearch = boolean;

const mySearch: SearchFunc = function (src, sub) {
  let result = src.search(src);
  // return 1;
  return Boolean(result);
};
