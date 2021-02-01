// import {loadImg} from "./loadImg";
// import {FastCar, SpecialCar,Trip} from "./car";

//loadImg
// let src = 'https://cn.vuejs.org/images/logo.png';
// loadImg(src).then(res => {
//   console.log(res);
//   document.body.appendChild(res)
// }).catch(err => {
//   console.log(err);
// })

//面试题1：车
// let car1 = new FastCar('快车',111);
// let trip1 = new Trip(5,car1);
// trip1.beginTrip();
// trip1.endTrip();
//
// let car2 = new SpecialCar('专车',222);
// let trip2 = new Trip(5,car2);
// trip2.beginTrip();
// trip2.endTrip();
// console.log(car2);
// console.log(trip2);

//1.工厂模式
// import {Product,Creator} from "./1.工厂模式";
// let creator = new Creator();
// let p = creator.create('产品1');
// p.init();

//2.单例模式
// import {SingleObject} from "./2.0单例模式";
// import {LoginForm} from "./2.1单例模式-模拟登录框";
// import {SetManager} from "./2.2单例模式ES5实现";

//3.适配器模式
// import {Adaptee} from "./3.适配器模式";

//4.装饰器模式
// import {Circle} from "./4.装饰器模式";
// import {Person} from "./4.装饰器模式ES5实现";

//5.代理模式
// import {ReadImg} from "./5.代理模式";
// import {agent} from "./5.代理模式-明星经纪人";

//6.观察者模式
// import {Observer} from "./6.观察者模式";

//7.迭代器模式
// import {Container} from "./7.迭代器模式";
// import {MakeIterator} from "./7.迭代器模式-博客";

//8.状态模式
// import {State} from "./8.状态模式";
// import {fsm} from "./8.状态机模式-有限状态机";

//9.原型模式
// import {obj1} from "./9.原型模式";

//10.桥接模式
// import {Color} from "./10.桥接模式";

//12.职责链模式
// import {Action} from "./12.职责链模式";

//13.命令模式
// import {Receiver} from "./13.命令模式";

//14.备忘录模式
// import {Editor} from "./14.备忘录模式";

//15.中介者模式
// import {Mediator} from "./15.中介者模式";

import App from './demo/App'

let app = new App('app');
app.init();
