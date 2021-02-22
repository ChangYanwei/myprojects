// 双向循环链表，最后一个节点的next指向头结点，头结点的prev指向尾结点。

function Node(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

function CircularDoublyLinkedList() {
  this.length = 0;
  this.head = null; // 指向头结点
  this.tail = null; // 指向末尾结点
}

CircularDoublyLinkedList.prototype.append = function (element) {
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

CircularDoublyLinkedList.prototype.toString = function () {
  return this.forwardString();
}

CircularDoublyLinkedList.prototype.forwardString = function () {
  let result = "";
  let current = this.head;
  do {
    result += current.element + " ";
    current = current.next;
  } while (current !== this.head);

  return result;
}

CircularDoublyLinkedList.prototype.backwardString = function () {
  let result = "";
  let current = this.tail;
  do {
    result += current.element + " ";
    current = current.next;
  } while (current !== this.head);

  return result;
}

CircularDoublyLinkedList.prototype.removeAt = function (position) {
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

CircularDoublyLinkedList.prototype.insert = function (element, position) {
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
CircularDoublyLinkedList.prototype.getNode = function (position) {
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

CircularDoublyLinkedList.prototype.getData = function (position) {
  let node = this.getNode(position);
  if (node) {
    return node.element;
  }
  return null;
}

// 查找某一个元素的坐标
CircularDoublyLinkedList.prototype.indexOf = function (element) {
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

CircularDoublyLinkedList.prototype.update = function (newElement, position) {
  let node = this.getNode(position);
  if (node) {
    node.element = newElement;
    return true;
  }
  return false;

}

CircularDoublyLinkedList.prototype.remove = function (element) {
  let index = this.indexOf(element);
  return this.removeAt(index);
}

CircularDoublyLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

CircularDoublyLinkedList.prototype.size = function () {
  return this.length;
}

CircularDoublyLinkedList.prototype.getFirst = function () {
  return this.head;
}

CircularDoublyLinkedList.prototype.getLast = function () {
  return this.tail;
}
