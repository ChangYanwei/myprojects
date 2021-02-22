function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

// 往末尾添加元素
LinkedList.prototype.append = function (element) {
  let node = new Node(element);

  // 如果初始为空
  if (this.head === null) {
    this.head = node;
  } else {
    let current = this.head;
    //循环链表，找到最后一项
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
}

// 根据位置移除元素并返回
LinkedList.prototype.removeAt = function (position) {
  // 判断位置是否越界，包含了列表中没有元素的这一种情况
  if (position < 0 || position >= this.length) return null;
  let current = this.head;

  if (position === 0) {
    this.head = current.next;
    this.length--;
    return current.element;
  }

  let currentIndex = 0;
  let prev = null;
  while (currentIndex < position) {
    prev = current;
    current = current.next;
    currentIndex++;
  }

  prev.next = current.next;
  this.length--;

  return current.element;
}

// 在任意位置插入元素，返回true或者false
LinkedList.prototype.insert = function (position, element) {
  if (position < 0 || position > this.length) return false;

  let node = new Node(element);
  let current = this.head;
  if (position === 0) {
    this.head = node;
    node.next = current;
    this.length++;
    return true;
  }

  let index = 0;
  let prev = null;
  while (index < position) {
    prev = current;
    current = current.next;
    index++;
  }

  prev.next = node;
  node.next = current;
  this.length++;
  return true;
}

LinkedList.prototype.indexOf = function (element) {
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
LinkedList.prototype.remove = function (element) {
  let index = LinkedList.prototype.indexOf(element);
  return LinkedList.prototype.removeAt(index);
}

LinkedList.prototype.size = function () {
  return this.length;
}

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
}

LinkedList.prototype.getHead = function () {
  return this.head;
}

LinkedList.prototype.get = function (position) {
  if (position < 0 || position >= this.length) return null;

  let current = this.head;
  let index = 0;
  while (index < position) {
    current = current.next;
    index++;
  }
  return current.element;
}

LinkedList.prototype.update = function (position, element) {
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

LinkedList.prototype.toString = function () {
  let current = this.head;
  let result = "";
  while (current) {
    result += current.element + " ";
    current = current.next;
  }
  return result;
}
