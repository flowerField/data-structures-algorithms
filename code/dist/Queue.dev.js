"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue =
/*#__PURE__*/
function () {
  function Queue(queue) {
    _classCallCheck(this, Queue);

    this.dataStore = queue || [];
    this.queueSize = queue.length || 0;
  }

  _createClass(Queue, [{
    key: "start",
    value: function start() {
      return this.dataStore[0];
    }
  }, {
    key: "end",
    value: function end() {
      return this.dataStore[this.dataStore.length - 1];
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.dataStore.join("\n");
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.dataStore.length == 0 ? true : false;
    }
  }, {
    key: "enqueue",
    value: function enqueue(element) {
      this.dataStore.push(element);
      ++this.queueSize;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      this.dataStore.shift();
      --this.queueSize;
    }
  }, {
    key: "length",
    value: function length() {
      return this.queueSize;
    }
  }]);

  return Queue;
}();
/* 测试数据 */


var q = new Queue([100, 200, 300]);
console.log(q.length());
q.enqueue(400);
console.log(q.toString());
console.log(q.length());
console.log(q.isEmpty());
/* 打印输出 */

/* 
3
100
200
300
400
4
false
*/