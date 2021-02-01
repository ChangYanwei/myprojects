let obj1 = {
  getName() {
    return this.first + ' ' + this.last;
  },
  say() {
    console.log('hello');
  }
}

let x = Object.create(obj1);
x.first = 'web';
x.last = 'chang';
console.log(x.getName());
x.say();
console.log(x);

export {obj1}
