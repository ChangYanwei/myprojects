// 解决冲突时使用链地址法，每个下标值不再是单独的一个元素，而是存储一个数组或者链表。此处使用了链表
import {LinkedList} from "./LinkedList-es5.js";

// 表示要加入链表中的元素
function ValuePair(key, value) {
  this.key = key;
  this.value = value;
  this.toString = function () {
    return "[" + this.key + "-" + this.value + "]";
  }
}

function HashTable() {
  this.storage = [];
  this.count = 0; // 数据项总个数
  this.length = 7; // hash表的总长度
}

// 哈希函数
HashTable.prototype.hashFun = function (str, size) {
  let hashCode = 0;
  for (let i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i);
  }

  let index = hashCode % size;
  return index;
}

HashTable.prototype.put = function (key, value) {
  let index = this.hashFun(key, this.length);

  let bucket = this.storage[index];

  if (!bucket) {
    bucket = new LinkedList();
    this.storage[index] = bucket;
  }

  let current = bucket.getHead();

  // 判读是否是修改数据
  while (current) {
    if (current.element.key === key) {
      current.element = new ValuePair(key, value);
      return;
    }
    current = current.next;
  }

  // 来到这个位置说明是新增数据
  bucket.append(new ValuePair(key, value));
  this.count++;

  // 判断是否需要扩容操作
  if (this.count / this.length > 0.75) {
    let newSize = this.getPrime(this.length * 2);
    this.reSize(newSize);
  }
}

HashTable.prototype.get = function (key) {
  let index = this.hashFun(key, this.length);
  let bucket = this.storage[index];

  if (!bucket) return null;

  let current = bucket.getHead();
  while (current) {
    if (current.element.key === key) {
      return current.element.value;
    }
    current = current.next;
  }
  return null;
}

HashTable.prototype.remove = function (key) {
  let value = this.get(key);
  if (!value) return null;
  let valuePair = new ValuePair(key, value);

  let index = this.hashFun(key, this.length);
  let bucket = this.storage[index];

  let delElement = bucket.remove(valuePair);
  this.count--;

  // 判断是否需要缩小容量，此处设置最小容量是7
  if (this.length > 7 && this.count / this.length < 0.25) {
    let newSize = this.getPrime(this.length / 2);
    this.reSize(newSize);
  }

  return delElement;
}

HashTable.prototype.isEmpty = function () {
  return this.count === 0;
}

HashTable.prototype.size = function () {
  return this.count;
}

HashTable.prototype.isPrime = function (num) {
  if (num <= 1 || !Number.isInteger(num)) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

HashTable.prototype.getPrime = function (num) {
  while (!this.isPrime(num)) {
    num++;
  }
  return num;
}

/**
 * 为什么需要扩容?
 * 目前,我们是将所有的数据项放在长度为7的数组中的.
 * 因为我们使用的是链地址法, loadFactor可以大于1,所以这个哈希表可以无限制的插入新数据.
 * 但是,随着数据量的增多，每一个index对应的bucket会越来越长，也就造成效率的降低.
 * 所以,在合适的情况对数组进行扩容.比如扩容两倍.
 *
 * 如何进行扩容?
 * 扩容可以简单的将容量增大两倍(不是质数)
 * 但是这种情况下,所有的数据项一定要同时进行修改(重新调用哈希函数,来获取到不同的位置)
 * 比如hashCode=12的数据项,在length=8的时候, index=4.在长度为16的时候呢? index=12.
 * 这是一个耗时的过程,但是如果数组需要扩容,那么这个过程是必要的.
 *
 * 什么情况下扩容呢?
 * 比较常见的情况是loadFactor>0.75的时候进行扩容.
 * 比如Java的哈希表就是在装填因子大于0.75的时候,对哈希表进行扩容.
 * */
HashTable.prototype.reSize = function (newLength) {
  let oldStorage = this.storage;

  // 重置所有属性
  this.storage = [];
  this.count = 0;
  this.length = newLength;

  for (let i = 0; i < oldStorage.length; i++) {
    let bucket = oldStorage[i];

    if (!bucket) continue;

    for (let j = 0; j < bucket.length; j++) {
      let tuple = bucket[j];
      this.put(tuple[0], tuple[1]);
    }
  }
}

export {HashTable}
