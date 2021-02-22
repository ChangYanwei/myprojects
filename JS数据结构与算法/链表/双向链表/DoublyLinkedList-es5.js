function Node(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.length = 0;
  this.head = null; // 指向头结点
  this.tail = null; // 指向末尾结点
}

DoublyLinkedList.prototype.append = function (element) {
  let node = new Node(element);

  if (this.length === 0) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  this.length++;
}

DoublyLinkedList.prototype.toString = function () {
  return this.forwardString();
}

DoublyLinkedList.prototype.forwardString = function() {
  let result = "";
  let current = this.head;
  while (current) {
    result += current.element + " ";
    current = current.next;
  }
  return result;
}

DoublyLinkedList.prototype.backwardString = function() {
  let result = "";
  let current = this.tail;
  while (current) {
    result += current.element + " ";
    current = current.prev;
  }
  return result;
}

DoublyLinkedList.prototype.removeAt = function (position) {
  if (position < 0 || position >= this.length) return null;

  let current = this.head;

  if (position === 0) {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
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

DoublyLinkedList.prototype.insert = function (element, position) {
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
  } else if (position === this.length) {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
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
DoublyLinkedList.prototype.getNode = function(position) {
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

DoublyLinkedList.prototype.getData = function (position) {
  return this.getNode(position).element;
}

// 查找某一个元素的坐标
DoublyLinkedList.prototype.indexOf = function (element) {
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

DoublyLinkedList.prototype.update = function (element,position) {
  let current = this.getNode(position);
  current.element = element;
  return true;
}

DoublyLinkedList.prototype.remove = function (element) {
  let index = this.indexOf(element);
  return this.removeAt(index);
}

DoublyLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

DoublyLinkedList.prototype.size = function () {
  return this.length;
}

DoublyLinkedList.prototype.getFirst = function () {
  return this.head;
}

DoublyLinkedList.prototype.getLast = function () {
  return this.tail;
}
