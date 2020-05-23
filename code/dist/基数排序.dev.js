"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 基数排序 */

/* 排序数据：N 个两位数(0~99)，按照从小到大的顺序排列 */

/* 数据结构：通过 Queue 来构建 Bin  */

/* 核心算法： */

/* 1.分配10个盒子(bin:0 ~ bin:9) */

/* 2.扫描数列，按照个位上的数字进行排序，分配到对应的盒子中 */

/* 3.分配10个盒子(bin:0 ~ bin:9) */

/* 4.扫描数列，按照十位上的数字进行排序，分配到对应的盒子中 */

/* 5.将盒子中的数字取出，组成新的列表，即为结果。 */

/* 示例代码 */
var Queue =
/*#__PURE__*/
function () {
  function Queue(queue) {
    _classCallCheck(this, Queue);

    this.dataStore = queue || [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(ele) {
      this.dataStore.push(ele);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this.dataStore.shift();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.dataStore.length == 0 ? true : false;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.dataStore.join("\n");
    }
  }]);

  return Queue;
}();

function radixSort(list) {
  /* 1.创建10个盒子 */
  var bins = [];

  for (var i = 0; i < 10; i++) {
    bins[i] = new Queue();
  }
  /* 先把数字分配到对应的盒子中保存 */


  function allocation(list, queues, radix) {
    list.forEach(function (ele, idx) {
      if (radix == 1) {
        queues[ele % 10].enqueue(ele);
      } else {
        queues[Math.floor(ele / 10)].enqueue(ele);
      }
    });
  }
  /* 把盒子中的数据都取出来保存为列表 */


  function collect(list, queues) {
    var i = 0;

    for (var index = 0; index < queues.length; index++) {
      var queue = queues[index];

      while (!queue.isEmpty()) {
        list[i++] = queue.dequeue();
      }
    }
  }
  /* 按照个位数排序 */


  allocation(list, bins, 1);
  /* 收集排序结果 */

  collect(list, bins);
  /* 按照十位数排序 */

  allocation(list, bins, 10);
  /* 收集排序结果 */

  collect(list, bins);
  return list;
}

var list = [8, 21, 43, 82, 41, 24, 67, 37];
console.log(radixSort(list));