function Node(element) {
  this.element = element;
  this.next = null;
}

function CircularLinkedList() {
  this.length = 0;
  this.head = null;
}

// 往末尾添加元素
CircularLinkedList.prototype.append = function (element) {
  let node = new Node(element);

  // debugger
  // 如果初始为空
  if (this.length === 0) {
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
CircularLinkedList.prototype.removeAt = function (position) {
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
CircularLinkedList.prototype.insert = function (position, element) {
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

CircularLinkedList.prototype.indexOf = function (element) {
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
CircularLinkedList.prototype.remove = function (element) {
  let index = CircularLinkedList.prototype.indexOf(element);
  return CircularLinkedList.prototype.removeAt(index);
}

CircularLinkedList.prototype.size = function () {
  return this.length;
}

CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

CircularLinkedList.prototype.getHead = function () {
  return this.head;
}

CircularLinkedList.prototype.get = function (position) {
  if (position < 0 || position >= this.length) return null;

  let current = this.head;
  let index = 0;
  while (index < position) {
    current = current.next;
    index++;
  }
  return current.element;
}

CircularLinkedList.prototype.update = function (position, element) {
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

CircularLinkedList.prototype.toString = function () {
  let current = this.head;
  let result = "";
  do {
    result += current.element + " ";
    current = current.next;
  } while (current !== this.head)
  return result;
}
