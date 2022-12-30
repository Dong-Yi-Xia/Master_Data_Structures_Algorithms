class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        //Left
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        //right
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  DFSInorder() {
    return traverseInorder(this.root, []);
  }

  DFSPreorder() {
    return traversePreorder(this.root, []);
  }

  DFSPostorder() {
    return traversePostorder(this.root, []);
  }
}

function traverseInorder(node, list) {
  // console.log(node.value)
  //Go to the most left leaf node
  if (node.left) {
    traverseInorder(node.left, list);
  }
  //When we are at leaf, proceed with the next step
  list.push(node.value);

  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
}  // O(height of tree) stack call of the most depth node

function traversePreorder(node, list) {
  //Parent first
  list.push(node.value);

  if (node.left) {
    traversePreorder(node.left, list);
  }

  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
}  // O(height of tree) stack call of the most depth node

function traversePostorder(node, list) {
  if (node.left) {
    traversePostorder(node.left, list);
  }

  if (node.right) {
    traversePostorder(node.right, list);
  }
  //parent last
  list.push(node.value);
  return list;
}  // O(height of tree) stack call of the most depth node

//     9
//  4     20
//1  6  15  170

// inorder - [1,4,6,9,15,20,170]  left,parent,right - smallest to largest
// preorder - [9,4,1,6,20,15,170]  parent,left,right
// postorder - [1,6,4,15,170,20,9] left,right,parent

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(tree.DFSInorder());
// console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());

// console.log(tree.lookup(20));
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
