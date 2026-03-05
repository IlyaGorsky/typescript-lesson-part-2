{
  /**
   * @satisfies
   * @see https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#hamilton
   */
  interface Person {
    name: string;
    age: number;
    date: number;
  }

  function sendPersonData(data: Person) {}
  const data = { name: "", age: 2 } satisfies Omit<Person, 'date'>;

  sendPersonData(data);
}
