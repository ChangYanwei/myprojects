// 接收者
class Receiver {
  exec() {
    console.log('执行');
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  cmd() {
    console.log('执行命令');
    this.receiver.exec();
  }
}

// 发布者
class Invoker {
  constructor(command) {
    this.command = command;
  }

  invoke() {
    console.log('发布命令');
    this.command.cmd();
  }
}

// 士兵
let soldier = new Receiver();
// 号手
let trumpeter = new Command(soldier);
// 将军
let general = new Invoker(trumpeter);
general.invoke();

export {Receiver}
