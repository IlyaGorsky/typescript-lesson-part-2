// Литеральные типы были созданы для того, чтобы на этапе компиляции выявлять
// ошибки, возникающие из-за несоответствия значений заранее объявленных констант,
// как, например, номер порта или идентификатор динамического типа.

/**
 * Логический литеральный тип
 *
 * @name Boolean
 */
function required(flag: true | false) {}
required(true);
required(false);
// required(1)
// required("false")

/**
 * Строковые литеральный тип
 *
 * @name String
 * @description п
 */
function animate(easing: "in" | "out" | "easeInOut" | "lienar") {}

animate("in");
// animate("ease");
// animate("easeIn");

/**
 * Числовые литеральный тип
 *
 * @name Number
 */
{
  const port80: number = 80;
  const port42: number = 42;

  // параметры ограничены лишь типом данных
  const start = (port: number): void => {
    if (port !== port80 && port !== port42) {
      throw new Error(`port #${port} is not valid.`);
    }
    console.log("start");
  };
  // start(81); // вызов с неправильным значением
}

{
  type ValidPortValue = 80 | 42;
  const port80: number = 80;
  const port42: number = 42;

  const start = (port: ValidPortValue) => {
    // блок if сообщит об ошибке только во время выполнения
    if (port !== port80 && port !== port42) {
      throw new Error(`port #${port} is not valid.`);
    }
    console.log(`start port: ${port}`);
  };
  // start(81);
  // start(80);
}
