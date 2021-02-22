class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);

    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    return super.dequeue();
  }

  front() {
    return super.front();
  }

  isEmpty() {
    return super.isEmpty();
  }

  size() {
    return super.size();
  }

  toString() {
    let str = '';
    for (let item of this.items) {
      str += item.element + ":" + item.priority + ',';
    }
    return str;
  }

}
