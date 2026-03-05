/**
 * Мержинг интерфейсов
 */
interface Car {
  model: string;
}

interface Car {
  // fuel: boolean;
}

interface Car {
  fuel: boolean;
  // color: string;
  // model: boolean;
}

let bmwCar: Car = {
  model: "f30",
  fuel: true,
};

// Полезный пример - можно расширять глобальный интерфейс
interface Window {
  webkitAudioContext: typeof AudioContext;
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// type vs interface
// типа можно реализовать или расширить, только если он представляет объектный тип
// ( object type ) или пересечение объектных типов со статически известными членами.
// Кроме того, псевдонимы типов нельзя использовать в таких операциях с типами
// времени выполнения как typeof и instanceof . Если псевдоним типа будет создан
// для объекта, то при попытке создать его экземпляр возникнет ошибка.
