const EventEmitter = require('events').EventEmitter;

// const emitter1 = new EventEmitter();
//
// //监听 some 事件
// emitter1.on('some',info => {
//   console.log('fn1',info);
// })
//
// emitter1.on('some',info => {
//   console.log('fn2',info);
// })
//
// emitter1.on('some',info => {
//   console.log('fn3',info);
// })
//
// //触发 some 事件
// emitter1.emit('some','hello')

// class Dog extends EventEmitter {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }
//
// let d1 = new Dog('tom');
// d1.on('bark',function () {
//   console.log(this.name,'bark');
// })
// d1.emit('bark');

const fs = require('fs');
const readStream = fs.createReadStream('../dist/bundle.js');
let length = 0;
readStream.on('data',function (chunk) {
  let len = chunk.toString().length;
  console.log('len',len);
  length += len;
})
readStream.on('end',function () {
  console.log('length',length);
})

//直接使用 node 命令执行该文件
// export {EventEmitter}
