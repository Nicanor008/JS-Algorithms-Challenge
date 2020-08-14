var Node = function (element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");
var Cat = new Node("Cat");
var Dog = new Node("Dog");

Kitten.next = Puppy;
// only add code below this line
Puppy.next = Cat;
Cat.next = Dog;
// test your code
console.log(Kitten.next);
