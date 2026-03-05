const formatPrice = (price: number | string) => {
  if (typeof price === "string") {
    return parseInt(price, 10).toFixed(2);
  }
  return price.toFixed(2);
};

const isValidDate = (value: unknown): value is Date => {
  return value instanceof Date;
};

const printDate = (date: unknown) => {
  if (isValidDate(date)) {
    console.log(date.getDay());
  }
  throw new Error("Invalid date");
};



interface PrintUser {
  name?: string;
  age?: number;
}

const isUser = (x: unknown): x is PrintUser => {
  if (typeof x === "object" && x != null && "name" in x && "age" in x) {
    return true;
  }
  return false;
};

const printUser = (user: PrintUser) => {
  if (isUser(user)) {
    console.log(user.name, user.age);
  }
  console.log("unknown");
};

// printUser(new Date());
