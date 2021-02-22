class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 往末尾添加元素
  append(element) {
    let node = new Node(element);

    // 如果初始为空
    if (this.head === null) {
      this.head = node;
      node.next = this.head;
    } else {
      let current = this.head;
      //循环链表，找到最后一项
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = node;
      node.next = this.head;
    }

    this.length++;
  }

  // 根据位置移除元素并返回
  removeAt(position) {
    // 判断位置是否越界，包含了列表中没有元素的这一种情况
    if (position < 0 || position >= this.length) return null;
    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let currentIndex = 0;
      let prev = null;
      while (currentIndex < position) {
        prev = current;
        current = current.next;
        currentIndex++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.element;
  }

  // 在任意位置插入元素，返回true或者false
  insert(position, element) {
    if (position < 0 || position > this.length) return false;

    let node = new Node(element);
    let current = this.head;
    if (position === 0) {
      this.head = node;
      node.next = current;
    } else {
      let index = 0;
      let prev = null;
      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
    return true;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // 根据元素值移除
  remove(element) {
    let index = indexOf(element);
    return removeAt(index);
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  getHead() {
    return this.head;
  }

  get(position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.element;
  }

  update(position, element) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    current.element = element;
    return true;
  }

  toString() {
    let current = this.head;
    let result = "";
    do {
      result += current.element + " ";
      current = current.next;
    } while (current !== this.head)

    return result;
  }
}
