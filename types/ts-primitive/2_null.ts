/**
 * @name Null
 * @description Представляет собой пустое значение
 */
let currentDate: null = null;
// тип null совместим со всеми типами, помимо него самого, с ним самим
// совместим лишь тип undefined и any
let anyDate: any;
currentDate = undefined;
currentDate = anyDate;

// Это поведение можно изменить флагом --strictNullChecks (или общим флагом --strict)
// strictNullChecks тип null является подтипом только одного типа any
// currentDate = undefined;
// currentDate = anyDate;
