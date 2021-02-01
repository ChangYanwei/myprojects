class LoginForm {
  constructor() {
    this.state = 'hide';
  }

  show() {
    if (this.state === 'show') {
      console.log('登录框已经显示');
      return
    }

    this.state = 'show';
    console.log('登录框显示成功');
  }

  hide() {
    if (this.state === 'hide') {
      console.log('登录框已经隐藏');
      return;
    }

    this.state = 'hide';
    console.log('登录框已隐藏');
  }
}

LoginForm.getInstance = (function () {
  let instance = null;

  return function () {
    if (!instance) {
      instance = new LoginForm();
    }

    return instance;
  }
})()

let loginForm1 = LoginForm.getInstance();
let loginForm2 = LoginForm.getInstance();
loginForm1.show();
loginForm2.show();
console.log('登录框',loginForm1 === loginForm2);

export {LoginForm}
