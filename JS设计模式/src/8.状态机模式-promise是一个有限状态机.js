import StateMachine from 'javascript-state-machine';

let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve',
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject',
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    // 监听 resolve
    onResolve(state, data) {
      // state 当前状态机实例，data ：fsm.resolve(xxx) 传递的参数 xxx
      data.successList.forEach(fn => fn())

    },
    // 监听 reject
    onReject(state, data) {
      data.failList.forEach(fn => fn())
    }
  }
})

// 定义 promise
class MyPromise {
  constructor(fn) {
    this.successList = [];
    this.failList = [];

    fn(function () {
      // resolve
      fsm.resolve(this)

    },function () {
      // reject
      fsm.reject(this);

    })
  }

  then(successFn,failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

// 测试
function loadImg(src) {

}
