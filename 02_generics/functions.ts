/**
 * Дженерные функции
 */
{
  const addVariableToSession = <T>(variable: T) => {
    return {
      id: 1,
      nickName: "John",
      additionalProp: variable,
    };
  };

  const userSession = addVariableToSession({
    hhid: "123456",
    hhuid: "abcdef",
    token: "asdjh873hrhjb!usdhf",
  });
  // interface AdditionalProps {
  //     hhid: string;
  //     hhuid: string;
  //     token: number;
  // }
  // const userSession2 = addVariableToSession<AdditionalProps>({
  //     hhid: "123456",
  //     hhuid: "abcdef",
  //     token: "asdjh873hrhjb!usdhf",
  // });

  console.log(userSession.additionalProp.token);
}
