// class MakeIterator {
//   constructor(list) {
//     this.list = list;
//     this.index = 0;
//   }
//
//   next() {
//     if (this.index < this.list.length) {
//       return {
//         value: this.list[this.index++],
//         done: false
//       }
//     }
//
//     return {
//       value: undefined,
//       done: true
//     }
//   }
// }

// 测试
// let iterator = new MakeIterator([1, 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// let item = iterator.next();
// while (!item.done) {
//   console.log(item.value);
//   item = iterator.next();
// }

//------------------------------

function MakeIterator(list) {
  let index = 0;
  return {
    next: function () {
      //三元表达式
      return index < list.length ? {value: list[index++], done: false} : {value: undefined, done: true}
    }
  }
}

// var iterator = MakeIterator([1,3,5]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//------------------------------

// function idMaker() {
//   let index = 0;
//
//   return {
//     next: function () {
//       return {value: index++, done: false}
//     }
//   }
// }
//
// let it = new idMaker();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// const obj = {
//   [Symbol.iterator]: function () {
//     return {
//       next: function () {
//         return {value: 0, done: false}
//       }
//     }
//   }
// }
//
// // 测试
// let iterator = obj[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//------------------------------

// let arr = ['a','b','c'];
// let iterator = arr[Symbol.iterator]();
// console.log(arr);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// let arr = ['red','green','blue'];
// for (let item of arr) {
//   console.log(item); // red green blue
// }
//
// let obj = {};
// obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
// for (let item of obj) {
//   console.log(item); // red green blue
// }
// console.log(obj);

// let arr = [1,2,3];
// arr.foo = 'webchang';
//
// for (let i in arr) {
//   console.log(i); // "0" "1" "2" "foo"
// }
//
// for (let i of arr) {
//   console.log(i); // 1 2 3
// }

// let names = new Set(['小明','webchang','小红','webchang']);
// for (let item of names) {
//   console.log(item); // 小明 webchang 小红
// }
//
// let students = new Map();
// students.set('001','小明');
// students.set('002','webchang');
// students.set('003','小红');
// for (let item of students) {
//   console.log(item);
// }
//
// for (let [num,name] of students) {
//   console.log(num,name);
// }

// for (let item of ['a', 'b'].entries()) {
//   console.log(item);
// }
// console.log(['a', 'b'].entries());
// let obj = {
//   name: 'webchang',
//   age: 18
// }
// for (let item of obj) {
//   console.log(item);
// }

//-------------------

// class RangeIterator {
//   constructor(start, end) {
//     this.value = start;
//     this.stop = end;
//   }
//
//   [Symbol.iterator]() {
//     return this;
//   }
//
//   next() {
//     let value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {value: this.value, done: false};
//     }
//
//     return {value: undefined, done: true}
//   }
// }
//
// let range = new RangeIterator(0,3);
// for (let item of range) {
//   console.log(item);
// }
// console.log(range);

//-------------------

// let obj = {
//   data: ['web', 'chang'],
// }
// obj[Symbol.iterator] = function () {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < 2) {
//         return {value: index++, done: false}
//       }
//       return {value: undefined, done: true}
//     }
//   }
// }
// for (let item of obj) {
//   console.log(item); // "web" "chang"
// }

// let iterable = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//   console.log(item); // undefined, undefined, undefined
// }

var obj5 = {};

obj5[Symbol.iterator] = function () {
  let index = 0;
  return {
    next: function () {
      // return 1
      if (index < 4) {
        return {value: index++, done: false}
      }
      return {value: undefined,done: true}
    }
  }
}

for (let item of obj5) {
  console.log(item);
}


export {MakeIterator}
