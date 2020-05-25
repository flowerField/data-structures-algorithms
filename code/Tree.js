/* 1.Node 节点 Class */
class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show() {
        return this.data;
    }
}

/* 2.BST 二叉树 Class */
class BST {
    constructor() {
        this.root = null;
        this.preOrderTraversal = "";
    }
    insert(data) {
        /* 插入节点 */
        let node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            let parent, current = this.root;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }
    preOrder(node) {
        let current = node;
        if (current != null) {
            console.log(current.show() + " ");
            this.preOrder(current.left);
            this.preOrder(current.right);
        }
    }
    postOrder(node) {
        let current = node;
        if (current != null) {
            this.postOrder(current.left);
            this.postOrder(current.right);
            console.log(current.show() + " ");
        }
    }
    inOrder(node) {
        let current = node;
        if (current != null) {
            this.inOrder(current.left);
            console.log(current.show() + " ");
            this.inOrder(current.right);
        }
    }
    getMin() {
        let current = this.root;
        while (current != null) {
            current = current.left;
        }
        return current.data;
    }
    getMax() {
        let current = this.root;
        while (current != null) {
            current = current.right;
        }
        return current.data;
    }
}

let tree = new BST();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);
console.dir(tree, 5);
console.log(tree.preOrder(tree.root));