class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null; // 指向头结点
    this.tail = null; // 指向末尾结点
  }

  append(element) {
    let node = new Node(element);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      node.prev = this.tail;
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
      this.head.prev = this.tail;
    }

    this.length++;
  }

  toString() {
    return this.forwardString();
  }

  forwardString() {
    let result = "";
    let current = this.head;
    do {
      result += current.element + " ";
      current = current.next;
    } while (current !== this.head);

    return result;
  }

  backwardString() {
    let result = "";
    let current = this.tail;
    do {
      result += current.element + " ";
      current = current.next;
    } while (current !== this.head);

    return result;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;

    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = this.tail;
        this.tail.next = this.head;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      let prevNode;
      let index = 0;
      while (index++ < position) {
        prevNode = current;
        current = current.next;
      }
      prevNode.next = current.next;
      current.next.prev = prevNode;
    }

    this.length--;
    return current.element;
  }

  insert(element, position) {
    if (position < 0 || position > this.length) return false;

    let node = new Node(element);
    if (position === 0) {
      if (this.length === 0) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else if (position === this.length) {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      let index = 0;
      let current = this.head;
      while (index < position) {
        current = current.next;
        index++;
      }
      current.prev.next = node;
      node.prev = current.prev;
      node.next = current;
      current.prev = node;
    }
    this.length++;
    return true;
  }

// 获取结点
  getNode(position) {
    if (position < 0 || position >= this.length) return null;

    let index;
    let current;
    if (position < this.length / 2) {
      current = this.head;
      index = 0;
      while (index < position) {
        current = current.next;
        index++;
      }
    } else {
      current = this.tail;
      index = this.length - 1;
      while (index > position) {
        current = current.prev;
        index--;
      }
    }

    return current;
  }

  getData(position) {
    let node = this.getNode(position);
    if (node) {
      return node.element;
    }
    return null;
  }

// 查找某一个元素的坐标
  indexOf(element) {
    let current = this.head;
    let index = 0;
    do {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    } while (current !== this.head);

    return -1;
  }

  update(newElement, position) {
    let node = this.getNode(position);
    if (node) {
      node.element = newElement;
      return true;
    }
    return false;

  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }
}


