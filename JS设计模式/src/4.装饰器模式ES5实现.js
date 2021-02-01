function Person() {

}

Person.prototype.skill = function () {
  console.log('数学');
}

function MusicDecorator(person) {
  this.person = person;
}

MusicDecorator.prototype.skill = function () {
  this.person.skill();
  console.log('音乐');
}

function RunDecorator(person) {
  this.person = person;
}

RunDecorator.prototype.skill = function () {
  this.person.skill();
  console.log('跑步');
}

var p1 = new Person();
p1.skill();

var p2 = new MusicDecorator(p1);
p2 = new RunDecorator(p2);
p2.skill();

export {Person}
