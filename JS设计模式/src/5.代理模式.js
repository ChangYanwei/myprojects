class ReadImg {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }

  display() {
    console.log('展示图片',this.filename);
  }

  loadFromDisk() {
    console.log('加载图片',this.filename);
  }
}

class ProxyImg {
  constructor(filename) {
    this.realImg = new ReadImg(filename);
  }

  display() {
    this.realImg.display();
  }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display();
console.log(proxyImg);

export {ReadImg}
