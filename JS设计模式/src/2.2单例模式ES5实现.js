function SetManager(name) {
  this.name = name;
}

SetManager.prototype.getName = function () {
  return this.name;
}

var singleManager = (function () {
  var manager = null;

  return function (name) {
    if (!manager) {
      manager = new SetManager(name)
    }

    return manager;
  }
})()

// var m1 = singleManager('a');
// var m2 = singleManager('b');
// var m3 = singleManager('c');
// console.log(m1.getName(), m2.getName(), m3.getName(), m1 === m2, m2 === m3);

//提取出通用的单例
function getSingle(fn) {
  var instance = null;

  return function () {
    if (!instance) {
      instance = fn.apply(this,arguments);
    }

    return instance;
  }
}

var managerSingle = getSingle(function (name) {
  var manager = new SetManager(name);
  return manager;
})
// var m1 = managerSingle('a');
// var m2 = managerSingle('b');
// var m3 = managerSingle('c');
// console.log(m1.getName(), m2.getName(), m3.getName(), m1 === m2, m2 === m3);

function createDiv(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
  return div;
}

var singleDiv = getSingle(function () {
  var div = createDiv.apply(this,arguments);
  return div;
})
console.log(singleDiv('aaa').innerHTML,singleDiv('bbb').innerHTML);

export {SetManager}
