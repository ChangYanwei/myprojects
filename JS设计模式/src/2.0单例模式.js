//保证一个类仅有一个实例，并提供一个访问它的全局访问点

class SingleObject {

  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(`${this.name}登录`);
  }
}

//class的静态方法
SingleObject.getInstance = (function () {
  let instance = null;

  return function (name) {
    if (!instance) {
      instance = new SingleObject(name);
    }

    return instance;
  }
})();
 
let obj1 = SingleObject.getInstance('a');
obj1.login();
let obj2 = SingleObject.getInstance('b');
obj2.login();
console.log(obj1 === obj2);

export {SingleObject}




