"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 1.Node 节点 Class */
var Node =
/*#__PURE__*/
function () {
  function Node(data, left, right) {
    _classCallCheck(this, Node);

    this.data = data;
    this.left = left;
    this.right = right;
  }

  _createClass(Node, [{
    key: "show",
    value: function show() {
      return this.data;
    }
  }]);

  return Node;
}();
/* 2.BST 二叉树 Class */


var BST =
/*#__PURE__*/
function () {
  function BST() {
    _classCallCheck(this, BST);

    this.root = null;
    this.preOrderTraversal = "";
  }

  _createClass(BST, [{
    key: "insert",
    value: function insert(data) {
      /* 插入节点 */
      var node = new Node(data, null, null);

      if (this.root == null) {
        this.root = node;
      } else {
        var parent,
            current = this.root;

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
  }, {
    key: "preOrder",
    value: function preOrder(node) {
      var current = node;

      if (current != null) {
        console.log(current.show() + " ");
        this.preOrder(current.left);
        this.preOrder(current.right);
      }
    }
  }, {
    key: "postOrder",
    value: function postOrder(node) {
      var current = node;

      if (current != null) {
        this.postOrder(current.left);
        this.postOrder(current.right);
        console.log(current.show() + " ");
      }
    }
  }, {
    key: "inOrder",
    value: function inOrder(node) {
      var current = node;

      if (current != null) {
        this.inOrder(current.left);
        console.log(current.show() + " ");
        this.inOrder(current.right);
      }
    }
  }, {
    key: "getMin",
    value: function getMin() {
      var current = this.root;

      while (current != null) {
        current = current.left;
      }

      return current.data;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      var current = this.root;

      while (current != null) {
        current = current.right;
      }

      return current.data;
    }
  }]);

  return BST;
}();

var tree = new BST();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);
console.dir(tree, 5);
console.log(tree.preOrder(tree.root));