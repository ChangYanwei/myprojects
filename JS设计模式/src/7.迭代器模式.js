//自定义迭代器
class Iterator {
  constructor(container) {
    this.list = container.list;
    this.index = 0;
  }

  next() {
    if (this.hasNext()) {
      return this.list[this.index++];
    } else {
      return null;
    }
  }

  hasNext() {
    return this.index < this.list.length;
  }
}

class Container {
  constructor(list) {
    this.list = list;
  }

  //生成遍历器
  getIterator() {
    return new Iterator(this);
  }
}

let arr = [1,2,3,4];
let container = new Container(arr);
let iterator = container.getIterator(container);
while (iterator.hasNext()) {
  console.log(iterator.next());
}

//---------------------------------------
//ES6迭代器
console.log('----------------------');
function each(data) {
  let iterator = data[Symbol.iterator]();

  let item = iterator.next();
  while (!item.done) {
    console.log(item);
    console.log(item.value);
    item = iterator.next();
  }
}

//for of语法
function each2(data) {
  for (let item of data) {
    console.log(item);
  }
}

// each([1,2,3,4,5])
// each('webchang')
each2([1,2,3,4,5])
each2('webchang')
export {Container}
