import StateMachine from 'javascript-state-machine';

// 初始化状态机模型
let fsm = new StateMachine({
  init: '收藏',
  transitions: [
    {
      name: 'doStore',
      from: '收藏',
      to: '取消收藏'
    },
    {
      name: 'deleteStore',
      from: '取消收藏',
      to: '收藏'
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore() {
      console.log('收藏成功'); // 可以执行post请求
      updateText();
    },
    onDeleteStore() {
      console.log('取消收藏');
      updateText();
    }
  }
})

let btn1 = document.getElementById('btn1');

// 按钮点击事件
btn1.onclick = function () {
  if (fsm.is('收藏')) {
    fsm.doStore();
  } else {
    fsm.deleteStore();
  }
}

// 更新文案
function updateText() {
  btn1.textContent = fsm.state;
}

// 初始化文案
updateText();

export {fsm}
