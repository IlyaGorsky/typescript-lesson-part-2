/**
 * Interface
 * @module interface.ts
 * @description Интерфейсы выполняют роль способа определния контрактов в коде
 *              Интерфейсы называют структурным подтипом, т.е форма должна подчиняться описанной структуре
 */

interface IUser {
  firstName: string;
  lastName: string;
}

function printUserFullName(user: IUser): void {
  console.log(`${user.firstName} ${user.lastName}`);
}

let someUser = {
  firstName: "Dead",
  lastName: "Pool",
  // middleName: "Zombie",
};

printUserFullName(someUser);
printUserFullName({ firstName: "Dead", lastName: "dddd" });
