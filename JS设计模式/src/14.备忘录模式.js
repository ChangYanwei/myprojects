// 状态备忘
class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// 备忘录
class CareTaker {
  constructor() {
    this.list = []
  }

  add(memento) {
    this.list.push(memento)
  }

  get(index) {
    return this.list[index];
  }
}

class Editor {
  constructor() {
    this.content = null;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  saveContentToMemento() {
    return new Memento(this.content);
  }

  getContentFromMemento(memento) {
    this.content = memento.getContent();
  }
}

let editor = new Editor();
let careTaker = new CareTaker();

editor.setContent('111222');
editor.setContent('hello world');
careTaker.add(editor.saveContentToMemento()); // 存储备忘录

editor.setContent('webchang');
careTaker.add(editor.saveContentToMemento())  // 存储备忘录

editor.setContent(444)
console.log(careTaker);

console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(1)); // 相当于撤销
console.log(editor.getContent());
editor.getContentFromMemento(careTaker.get(0));
console.log(editor.getContent());


export {Editor}
