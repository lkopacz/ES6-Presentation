// var vs let vs const 
// Talk about hoisting and examples of each
// Talk about how const is different from other languages such as PHP
// const being a reference vs something you cannot change. 


// Arrow Functions

// Before:
// We have to create a reference to `this` in order to make it available inside the new scope of the anonymous function
var _this = this
$('.foo').click(function(event){
  _this.handleClick();
})

// After:
// The scope is not changed inside of the arrow function so `this` is the same inside and out
$('.foo').click((event) => {
  this.handleClick();
})


// @todo: make this into a class example?
const person = {
  age: 28,
  name: 'Lindsey',

  increaseAge: (number) => {
    this.age = this.age + number,
  },
};

// We should also provide an example of how arrow function can be definied in a constant. 


// Anticipated Question
// Q1) Why would you write it that way?
// A1) Benefits: I don't have to define a const. You can also write a function anonymously
// A1) Differentiate how scoping is being impacted by using arrow function vs function 

//Intro into classes

