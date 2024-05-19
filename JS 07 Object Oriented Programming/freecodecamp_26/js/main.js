
/*
  IIFE для створення модуля
Вираз негайно викликаної функції (IIFE) часто використовують, щоб згрупувати пов’язану функціональність в один об’єкт або модуль. Наприклад, попереднє завдання визначило два міксини:

function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
Ми можемо згрупувати ці міксини в модуль:

let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
Зверніть увагу, що ви маєте вираз негайно викликаної функції (IIFE), який повертає об’єкт motionModule. Повернений об’єкт містить поведінку міксинів як властивості об’єкта. Перевага модуля в тому, що поведінку руху можна розмістити в одному об’єкті, який потім можуть використовувати інші частини коду. Ось приклад використання:

motionModule.glideMixin(duck);
duck.glide();
Створіть модуль під назвою funModule, щоб загорнути два міксини (isCuteMixin та singMixin). funModule має повернути об’єкт.


/* ============================================================================================================== */

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  }
})();




