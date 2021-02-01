
//旧接口
class Adaptee {
  specificRequest() {
    return '外国插头'
  }
}

//适配器
class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }

  request() {
    let info = this.adaptee.specificRequest();
    return `${info} -> 转换器 -> 中国插头`
  }
}

//测试
let target = new Target();
console.log(target.request());

export {Adaptee}
