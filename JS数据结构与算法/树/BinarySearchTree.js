function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insert = function (key) {
  let node = new Node(key);

  if (this.root === null) {
    this.root = node;
  } else {
    this.insertNode(this.root, node);
  }
}

BinarySearchTree.prototype.insertNode = function (node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      this.insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
}

// 先序遍历
BinarySearchTree.prototype.preOrder = function (handler) {
  this.preOrderNode(this.root, handler);
}
BinarySearchTree.prototype.preOrderNode = function (node, handler) {
  if (node !== null) {
    handler(node.key);

    this.preOrderNode(node.left, handler);

    this.preOrderNode(node.right, handler);
  }
}

//中序遍历
BinarySearchTree.prototype.midOrder = function (handler) {
  this.middleOrderNode(this.root, handler);
}
BinarySearchTree.prototype.midOrderNode = function (node, handler) {
  if (node !== null) {
    this.middleOrderNode(node.left, handler);

    handler(node.key);

    this.middleOrderNode(node.right, handler);
  }
}

//后序遍历
BinarySearchTree.prototype.postOrder = function (handler) {
  this.postOrderNode(this.root, handler);
}
BinarySearchTree.prototype.postOrderNode = function (node, handler) {
  if (node !== null) {
    this.postOrderNode(node.left, handler);
    this.postOrderNode(node.right, handler);
    handler(node.key);
  }
}

BinarySearchTree.prototype.min = function () {
  let node = this.root;
  while (node.left !== null) {
    node = node.left;
  }
  return node.key;
}

BinarySearchTree.prototype.max = function () {
  let node = this.root;
  while (node.right !== null) {
    node = node.right;
  }
  return node.key;
}

BinarySearchTree.prototype.search = function (key) {
  // 使用递归
  // this.searchNode(this.root, key);

  // 使用循环
  let node = this.root;
  while (node !== null) {
    if (node.key > key) {
      node = node.left;
    } else if (node.key < key) {
      node = node.right;
    } else {
      return true;
    }
  }
  return false;
}

BinarySearchTree.prototype.searchNode = function (node, key) {
  if (node === null) return false;

  if (node.key > key) {
    this.searchNode(node.left, key);
  } else if (node.key < key) {
    this.searchNode(node.right, key);
  } else {
    return true;
  }
}
