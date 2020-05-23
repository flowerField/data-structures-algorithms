# data-structures-algorithms
Introduce common data structures and algorithms in JavaScript


## 常用基础数据结构

### [List]()

> 列表( List )的抽象数据类型定义

内置属性 | 属性说明 |   核心方法 | 功能介绍 |
| ------ | ------------------ |------------------ |------------------ |
|  `dataStore` | 内部数据 | | |
|  `pos` | 指向当前位置的指针 | | |
|  `listSize` | 标识列表的长度 | | |
|||  length() | 获取列表的长度  |
|||  clear() | 清空列表并重置指针 |
|||  toString() | 转换为字符串显示 |
|||  insert( element) | 在列表任意位置插入元素 |
|||  append(element) |  在列表末尾追加元素 |
|||  remove(element) | 删除列表中指定的元素 |
|||  moveTo(element,after) | 移动指针到特定位置 |
|||  front() | 移动指针列表开头 |
|||  end() | 移动指针到列表末尾 |
|||  next() | 指针向后移动 |
|||  prev() | 指针向前移动 |
|||  currentPos() | 获取当前的指针位置 |
|||  getCurrentElement()| 获取指针当前指向的元素 |
|||  showList()| 显示列表信息 |

```javascript
class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    append(element) {
        this.dataStore[this.listSize++] = element;
    }
    find(element) {
        for (let index = 0; index < this.dataStore.length; index++) {
            const currentElement = this.dataStore[index];
            if (currentElement == element) {
                return index;
            }
            return -1;
        }
    }
    remove(element) {
        let findIndex = this.find(element);
        if (findIndex != -1) {
            this.dataStore.splice(findIndex, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    length() {
        return this.listSize;
    }
    toString() {
        return this.dataStore.join("\n");
    }
    insert(element, after) {
        let insertIndex = this.find(element);
        if (insertIndex != -1) {
            this.dataStore.splice(insertIndex + 1, 0, element);
            --this.listSize;
            return true;
        }
        return false;
    }
    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    contains(element) {
        let findIndex = this.find(element);
        return findIndex == -1 ? false : true;
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }
    currentPos() {
        return this.pos;
    }
    moveTo(position) {
        if (position >= 0 && position <= this.listSize - 1) {
            this.pos = position;
        }
    }
    getCurrentElement() {
        return this.dataStore[this.pos];
    }
    showList() {
        for (this.front(); this.currentPos() < this.length(); this.next()) {
            console.log(this.getCurrentElement());
        }
    }
}
```
### [Stack]()

### [Queue]()

### [Set]()

### [Dictionary]()

### [Tree]()


## [博客文章]()
[数据结构与算法 [01]-数组、链表和选择排序](http://wendingding.com/2016/10/13/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%20[01]-%E6%95%B0%E7%BB%84%E5%92%8C%E9%93%BE%E8%A1%A8%E3%80%81%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F%E4%B8%8E%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F/)

[数据结构与算法 [02]-栈、队列和递归](http://wendingding.com/2016/11/16/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%20[02]-%E6%A0%88%E3%80%81%E9%98%9F%E5%88%97%E4%B8%8E%E9%80%92%E5%BD%92/)

[数据结构与算法 [03]-栈的实现和应用](http://wendingding.com/2016/11/16/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%20[03]-%E6%A0%88%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%92%8C%E5%BA%94%E7%94%A8(JavaScript)/)
