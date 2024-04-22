
/*
  Ланцюг прототипів
Усі об’єкти в JavaScript (за парою винятків) мають prototype. До того ж сам прототип об’єкта є об’єктом.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
Оскільки prototype є об’єктом, prototype може мати власний prototype! У цьому випадку prototype Bird.prototype є Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);
Чим це корисно? Згадайте метод hasOwnProperty із попереднього завдання:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");
Метод hasOwnProperty визначений в Object.prototype, до якого можна отримати доступ завдяки Bird.prototype, до якого можна отримати доступ завдяки duck. Це приклад ланцюга прототипів. Bird у цьому ланцюзі прототипів є супертипом для duck, а duck є підтипом. Object є супертипом для Bird та duck. Object є супертипом для всіх об’єктів у JavaScript. Отже, будь-який об’єкт може використовувати метод hasOwnProperty.

Змініть код, щоб показувати правильний ланцюг прототипів.


/* ============================================================================================================== */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // показує правильно

// Виправте код нижче так, щоб він мав логічне значення
Object.prototype.isPrototypeOf(Dog.prototype);




