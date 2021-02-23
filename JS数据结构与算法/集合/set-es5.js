function Set() {
  this.items = {};
}

Set.prototype.has = function(value) {
  return this.items.hasOwnProperty(value);
}

Set.prototype.add = function (value) {
  if (this.has(value)) return false;

  this.items[value] = value;
  return true;
}

Set.prototype.delete = function (value) {
  if (!this.has(value)) return false;

  delete this.items[value];
  return true;
}

Set.prototype.clear = function () {
  this.items = {};
}

Set.prototype.size = function () {
  return Object.keys(this.items).length;
}

Set.prototype.values = function () {
  let valueArr = [];
  let items = this.items;
  for (let key in items) {
    if (items.hasOwnProperty(key)) {
      valueArr.push(items[key]);
    }
  }
  return valueArr;
}

// 并集
Set.prototype.union = function (otherSet) {
  let unionSet = new Set();

  for (let item of this.values()) {
    unionSet.add(item);
  }

  for (let item of otherSet.values()) {
    unionSet.add(item);
  }

  return unionSet;
}

// 交集
Set.prototype.intersection = function (otherSet) {
  let result = new Set();
  for (let item of this.values()) {
    if (otherSet.has(item)) {
      result.add(item);
    }
  }

  return result;
}

// 差集
Set.prototype.difference = function (otherSet) {
  let result = new Set();
  for (let item of this.values()) {
    if (!otherSet.has(item)) {
      result.add(item);
    }
  }
  return result;
}

// 子集，测试方法的调用者是否是参数otherSet的子集
Set.prototype.subSet = function (otherSet) {
  if (this.size() > otherSet.size()) return false;

  for (let item of this.values()) {
    if (!otherSet.has(item)) {
      return false;
    }
  }
  return true;
}
