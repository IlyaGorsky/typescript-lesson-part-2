/**
 * Для структур неизвестного значения
 * Присвается тип any
 * @module any.ts
 * @description
 */
import historyLib from "./anyLib";

historyLib.get();
historyLib.pop();
//     ^^^^^^ error

// /**
//  * Ситуации, когда использование any не является преступлением
//  */
//  function getNextArrayElement(arg: any[], index: number) {
//    return arg[index + 1] ? arg[index + 1] : undefined;
//  }
