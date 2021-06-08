"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = 10;
console.log(x);

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

var person = new Person("abc");
console.log(person.name);
