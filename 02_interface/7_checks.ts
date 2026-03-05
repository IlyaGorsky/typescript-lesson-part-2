/**
 * Excess Property Checks
 * @description Избытачная проверка на типы
 */
interface SquareConfig {
  color?: string;
  width?: number;
  foo?: string;
}

function createSquare(config: SquareConfig) {
  if (config.color) {
    console.log(config.color, config.width);
  }
}

createSquare({ color: "20fa", width: 20, opacity: 0.5 });
//                                          ^^^^^^^^^^^^  does not exist in type SquareConfig
// typescript не дает возможность передать объект больше чем перечислеными свойствами в SquareConfig

/**
 * Cпособ 1
 * Можно решить эту проблему с помощью  приведением типа (casting type)
 */
let config = { color: "20fa", opacity: 0.5, foo: "2" } as SquareConfig;
// createSquare(config);

/**
 * Cпособ 2
 * Для работы интефрейса с остальным набором любых свойств;
 * Нужно указать что ключ может быть типа string а значение типа any
 */
interface SuperSquareConfig {
  color?: string;
  width?: number;
  [x: string]: unknown;
  // ^^^^^^^^^^^^^^^ достаточно
}

function createSuperSquare(config: SuperSquareConfig) {}

createSuperSquare({ color: "20fa", width: 20, opacity: 0.5 });

{
  interface SquareConfig {
    color?: string;
    width?: number;
  }
  /**
   * Способ 3 Стурктурная типизация
   */
  const redSquare = {
    opacity: 0.5,
    color: "red",
    width: 20,
  };

  function createSquare(config: SquareConfig) {
    // if (config.color) {
    //     console.log(config.color, config.width);
    // }
  }

  // createSquare(redSquare);
  // createSquare({ color: "20fa", width: 20, opacity: 0.5 });

  const point: SquareConfig = redSquare;
}
