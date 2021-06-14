function ArrayList() {
  this.array = [];
}

ArrayList.prototype.insert = function (item) {
  this.array.push(item);
}

ArrayList.prototype.toString = function () {
  return this.array.join('-')
}

ArrayList.prototype.swap = function (m, n) {
  let temp = this.array[m];
  this.array[m] = this.array[n];
  this.array[n] = temp;
}

// 冒泡排序
ArrayList.prototype.bubbleSort = function () {
  let length = this.array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (this.array[j] > this.array[j + 1]) {
        this.swap(j, j + 1);
      }
    }
  }
}

//选择排序
ArrayList.prototype.selectionSort = function () {
  let length = this.array.length;

  for (let j = 0; j < length - 1; j++) {
    let minIndex = j;
    for (let i = minIndex + 1; i < length; i++) {
      if (this.array[minIndex] > this.array[i]) {
        minIndex = i;
      }
    }
    this.swap(minIndex, j);
  }
}

// 插入排序，插入排序的比较次数是少于冒泡排序和选择排序的
ArrayList.prototype.insertionSort = function () {
  let length = this.array.length;

  for (let i = 1;i < length;i++) {
    let temp = this.array[i];
    let j = i;
    while (this.array[j - 1] > temp && j > 0) {
      this.array[j] = this.array[j - 1];
      j--;
    }
    this.array[j] = temp;
  }
}

