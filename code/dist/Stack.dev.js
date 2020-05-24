"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.top = 0;
    this.dataStore = [];
  }

  _createClass(Stack, [{
    key: "pop",
    value: function pop() {
      this.dataStore.pop();
      this.top++;
    }
  }, {
    key: "push",
    value: function push(ele) {
      this.dataStore[this.top++] = ele;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.dataStore[this.top - 1];
    }
  }, {
    key: "clear",
    value: function clear() {
      this.top = 0;
      this.dataStore = [];
    }
  }]);

  return Stack;
}();
/* 测试数据 */


var stack = new Stack();
console.log('__________________');
console.log("top == ", stack.top);
console.log("data == ", stack.dataStore);
stack.push(111);
stack.push(222);
stack.push(333);
console.log('__________________');
console.log("top == ", stack.top);
console.log("data == ", stack.dataStore);
/* 打印输出 */

/* 
__________________
top ==  0
data ==  []
__________________
top ==  3
data ==  [ 111, 222, 333 ]
*/