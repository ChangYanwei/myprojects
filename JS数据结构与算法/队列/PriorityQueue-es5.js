// 优先级队列
// 此处实现的优先队列称为最小优先队列，因为优先级的值较小的元素被放置在队列最前面（1代表更高的优先级）
function PriorityQueue() {
  this.items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i,0,queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  this.dequeue = function () {
    return this.items.shift();
  }

  this.front = function () {
    return this.items[0];
  }

  this.isEmpty = function () {
    return this.items.length === 0;
  }

  this.size = function () {
    return this.items.length;
  }

  this.toString = function () {
    let str = '';
    for (let item of this.items) {
      str += item.element + ":" + item.priority + ',';
    }
    return str;
  }

}
