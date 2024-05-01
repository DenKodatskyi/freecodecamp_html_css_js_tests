
/*
  Скидання властивості успадкованого конструктора
Якщо об’єкт успадковує prototype від іншого об’єкту, він також успадковує властивість конструктора супертипу.

Наприклад:

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
Але duck та усі екземпляри Bird мають показати, що їх створив Bird, а не Animal. Для цього ви можете власноруч встановити властивість конструктора Bird на об’єкт Bird:

Bird.prototype.constructor = Bird;
duck.constructor
Змініть код, щоб duck.constructor та beagle.constructor повернули відповідні конструктори.


/* ============================================================================================================== */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Змініть код лише під цим рядком
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();




