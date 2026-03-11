/**
 * Перегрузка функции (overload)
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
 */

type CountryPrice = {
  code: string;
  price: number;
};

enum CountryCode {
  RU = "RU",
  EN = "EN",
}

function getDiscountByCountry(price: number): number;
function getDiscountByCountry(price: number, countryCode: string): CountryPrice;
function getDiscountByCountry(price: number, countryCode: CountryCode): { code: "CUSTOM"; price: number };
function getDiscountByCountry(price: number, countryCode?: string) {
  if (countryCode === "RU" || countryCode === "EN") {
    let result = { code: countryCode, price: (price / 5) * 100 };
    return result;
  }
  if (countryCode) {
    let result = { code: countryCode, price };
    return result;
  }
  return price;
}

const v1 = getDiscountByCountry(13);

const ua = getDiscountByCountry(10, "UA");
// const sum = getDiscountByCountry(20) + ua.price;
//  const discountEN = getDiscountByCountry(10, "EN");
// const sumRU = getDiscountByCountry(10) + getDiscountByCountry(10, "RU").price;
