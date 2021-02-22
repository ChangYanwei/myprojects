function Stack() {
  this.items = [];
}

Stack.prototype.push = function (element) {
  this.items.push(element);
}

Stack.prototype.pop = function () {
  return this.items.pop();
}

Stack.prototype.peek = function () {
  return this.items[this.items.length - 1];
}

Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
}

Stack.prototype.clear = function () {
  // this.items = [];
  this.items.splice(0);
}

Stack.prototype.size = function () {
  return this.items.length;
}

Stack.prototype.toString = function () {
  return this.items.toString();
}



