"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  _createClass(List, [{
    key: "length",
    value: function length() {
      return this.listSize;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.dataStore.join("\n");
    }
  }, {
    key: "contains",
    value: function contains(element) {
      var findIndex = this.find(element);
      return findIndex == -1 ? false : true;
    }
  }, {
    key: "front",
    value: function front() {
      this.pos = 0;
    }
  }, {
    key: "end",
    value: function end() {
      this.pos = this.listSize - 1;
    }
  }, {
    key: "prev",
    value: function prev() {
      if (this.pos > 0) {
        --this.pos;
      }
    }
  }, {
    key: "next",
    value: function next() {
      if (this.pos < this.listSize - 1) {
        ++this.pos;
      }
    }
  }, {
    key: "insert",
    value: function insert(element, after) {
      var insertIndex = this.find(element);

      if (insertIndex != -1) {
        this.dataStore.splice(insertIndex + 1, 0, element);
        ++this.listSize;
        return true;
      }

      return false;
    }
  }, {
    key: "append",
    value: function append(element) {
      this.dataStore[this.listSize++] = element;
    }
  }, {
    key: "find",
    value: function find(element) {
      for (var index = 0; index < this.dataStore.length; index++) {
        var currentElement = this.dataStore[index];

        if (currentElement == element) {
          return index;
        }

        return -1;
      }
    }
  }, {
    key: "remove",
    value: function remove(element) {
      var findIndex = this.find(element);

      if (findIndex != -1) {
        this.dataStore.splice(findIndex, 1);
        --this.listSize;
        return true;
      }

      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.dataStore = [];
      this.listSize = this.pos = 0;
    }
  }, {
    key: "currentPos",
    value: function currentPos() {
      return this.pos;
    }
  }, {
    key: "moveTo",
    value: function moveTo(position) {
      if (position >= 0 && position <= this.listSize - 1) {
        this.pos = position;
      }
    }
  }, {
    key: "getCurrentElement",
    value: function getCurrentElement() {
      return this.dataStore[this.pos];
    }
  }, {
    key: "showList",
    value: function showList() {
      for (var i = 0; i < this.dataStore.length; i++) {
        console.log("".concat(this.dataStore[i]));
      }
    }
  }]);

  return List;
}();
/* 0 1 2 3  */


var list = new List();
list.append("Yong");
list.append("Jin");
list.append("Xia");
list.append("Ping");
list.showList();
console.log(list.toString()); // console.log(list.dataStore);
// console.dir(list.currentPos());
// console.log(list.length());
// console.log(list.pos)
// console.log(list.next());
// console.log(list.pos)
// console.log(list.getCurrentElement());