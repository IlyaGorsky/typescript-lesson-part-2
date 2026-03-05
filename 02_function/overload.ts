/**
 * Перегрузка функции (overload)
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
 */

type CountryPrice = {
  code: string;
  price: number;
};

function getDiscountByCountry(price: number): number;
function getDiscountByCountry(price: number, countryCode: string): CountryPrice;
function getDiscountByCountry(price: number, countryCode: "RU" | "EN"): { code: "CUSTOM"; price: number };
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

enum CountryCode {
  RU = "RU",
  EN = "EN",
}

const v1 = getDiscountByCountry(13);

// const ua = getDiscountByCountry(10, "UA");
// const sum = getDiscountByCountry(20)+getDiscountByCountry(20)
// const discountEN = getDiscountByCountry(10, "RU");
const sumRU = getDiscountByCountry(10) + getDiscountByCountry(10, "RU").price;
