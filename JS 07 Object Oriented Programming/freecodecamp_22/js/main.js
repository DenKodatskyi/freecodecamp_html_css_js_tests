
/*
  Перевизначення успадкованих методів
У попередніх завданнях ви дізналися, що об’єкт може успадковувати поведінку (методи) від іншого об’єкта, посилаючись на його prototype:

ChildObject.prototype = Object.create(ParentObject.prototype);
Тоді ChildObject отримує власні методи, приєднавши їх до prototype:

ChildObject.prototype.methodName = function() {...};
Успадкований метод можна змінити. Це робиться так само: треба додати метод до ChildObject.prototype, використовуючи таку ж саму назву методу, як й у того, що підлягає редагуванню. Ось приклад Bird зі зміненим методом eat(), успадкованим від Animal:

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
Якщо ви маєте екземпляр let duck = new Bird(); та викличете duck.eat(), ось так JavaScript шукатиме метод у ланцюгу прототипів duck:

duck => Чи визначено eat()? Ні.
Bird => Чи визначено eat()? => Так. Виконайте й припиніть пошуки.
Animal => Також визначено eat(), але JavaScript вже припинив пошуки.
Об’єкт => JavaScript припинив пошуки.
Перевизначте метод fly() для Penguin, щоб він повернув рядок Alas, this is a flightless bird.


/* ============================================================================================================== */

function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Змініть код лише під цим рядком
Penguin.prototype.fly = () => {
  return "Alas, this is a flightless bird.";
};


// Змініть код лише над цим рядком

let penguin = new Penguin();
console.log(penguin.fly());




