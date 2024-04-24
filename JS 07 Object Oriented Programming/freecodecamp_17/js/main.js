
/*
  Успадкування, щоб не повторюватися
У програмуванні існує принцип Don't Repeat Yourself (DRY), що в перекладі означає «Не повторюйся». Повторюваний код є проблемою через те, що будь-яка зміна вимагає виправлення коду в декількох місцях. Зазвичай це завдає більше роботи програмістам і призводить до більшої кількості помилок.

Зверніть увагу, що у прикладі метод describe розповсюджується на Bird та Dog:

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Метод describe повторюється у двох місцях. Код можна редагувати відповідно до принципу DRY, створивши supertype (або батьківський елемент) під назвою Animal:

function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Оскільки Animal містить метод describe, його можна видалити з Bird та Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
Метод eat повторюється як у Cat, так і Bear. Відредагуйте код за принципом DRY, перемістивши метод eat до Animal supertype.


/* ============================================================================================================== */

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,

};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,

};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};




