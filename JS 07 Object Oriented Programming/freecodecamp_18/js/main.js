
/*
  Успадкування поведінки від супертипу
У попередньому завданні ви створили supertype під назвою Animal, який визначав поведінку, спільну для всіх тварин:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
Це та наступне завдання стосуватиметься того, як повторно використати методи Animal всередині Bird та Dog, не визначаючи їх знову. Тут використовується техніка, що називається успадкуванням. Це завдання охоплює перший крок: створити екземпляр supertype (або батьківський елемент). Вам вже відомий один спосіб створити екземпляр Animal за допомогою оператора new:

let animal = new Animal();
Цей синтаксис успадкування має деякі недоліки, які надто складні для цього завдання. Ось альтернативний підхід без цих недоліків:

let animal = Object.create(Animal.prototype);
Object.create(obj) створює новий об’єкт і налаштовує obj як prototype. Нагадаємо, що prototype є своєрідним «рецептом» для створення об’єкта. Встановивши animal prototype як Animal prototype, ви фактично надаєте animal екземпляр того ж «рецепта», що і будь-який інший екземпляр Animal.

animal.eat();
animal instanceof Animal;
Метод instanceof поверне true.

Використайте Object.create, щоб створити два екземпляри Animal під назвою duck та beagle.


/* ============================================================================================================== */

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

// Змініть код лише під цим рядком

let duck = Object.create(Animal.prototype); // Змініть цей рядок
let beagle = Object.create(Animal.prototype); // Змініть цей рядок





