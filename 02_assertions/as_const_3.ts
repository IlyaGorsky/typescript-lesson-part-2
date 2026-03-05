interface Person {
    name: string;
    age: number;
    date: number;
}

function sendPersonData(data: Person) { }
const data = { name: '', age: 2 } as Person;

sendPersonData(data);