let star = {
  name: '张三',
  age: 22,
  phone: '123'
}

//经纪人
let agent = new Proxy(star,{
  //target是要代理的对象star，key是要获取的属性的值
  //原对象的属性名称在代理之后是不会发生变化的
  get:function (target,key) {
    if (key === 'phone') {
      //返回经纪人自己的电话
      return '123456789';
    }

    if (key === 'price') {
      //明星不报价，经纪人报价
      return 120000
    }

    //如果不是上边的phone和price，就直接返回star自己的属性，可能是name或者age
    return target[key];
  },
  set:function (target,key,value) {
    if(key === 'customPrice') {
      if (value < 100000) {
        throw new Error('价格太低')
      } else {
        target[key] = value;
        return true;
      }
    }
  }
})

//测试
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);
agent.customPrice = 900000;
console.log(agent.customPrice);
console.log(star);
console.log(agent);

export {agent}

