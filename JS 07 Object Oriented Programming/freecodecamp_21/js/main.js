
/*
  Додавання методів після успадкування
Функція-конструктор, яка успадковує об’єкт prototype від функції-конструктора супертипу, всеодно може мати власні методи на додачу до успадкованих.

Наприклад, Bird є конструктором, який успадковує prototype від Animal:

function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Окрім успадкованого від Animal, за бажанням можна додати поведінку, унікальну для об’єктів Bird. У такому разі Bird отримує функцію fly(). Функції додаються до прототипу Bird так само, як і будь-яка функція-конструктор:

Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
Тепер екземпляри Bird матимуть методи eat() та fly():

let duck = new Bird();
duck.eat();
duck.fly();
duck.eat() показуватиме рядок nom nom nom на консолі, а duck.fly() показуватиме рядок I'm flying!.

Додайте необхідний код так, щоб об’єкт Dog успадковував від Animal, а прототип конструктора Dog був налаштований на Dog. Потім додайте метод bark() до об’єкта Dog, щоб beagle міг eat() та bark(). Метод bark() має вивести Woof! на консоль.


/* ============================================================================================================== */

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Змініть код лише під цим рядком
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => console.log('Woof!');
Dog.prototype.eat = () => console.log('nom nom nom');

// Змініть код лише над цим рядком

let beagle = new Dog();




