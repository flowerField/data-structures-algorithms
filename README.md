# data-structures-algorithms
Introduce common data structures and algorithms in JavaScript


## 常用基础数据结构

> <font face="微软雅黑" size = 5 color = #195 >`列表( List )的抽象数据类型定义`</font>


<table>
<thead>
<tr>
<th>数据结构</th>
<th>内部属性</th>
<th>属性说明</th>
<th>核心方法</th>
<th>功能介绍</th>
</tr>
</thead>
<tbody>
<tr><td> List 列表</td><td bgcolor=#195>dataStore</td><td>内部数据</td><td bgcolor=#195>clear()</td><td>清空列表重置指针</td></tr>
<tr><td></td><td bgcolor=#195>listSize</td><td>标识列表的长度</td><td bgcolor=#195>toString()</td><td>转换为字符串显示</td></tr>
<tr><td></td><td bgcolor=#195>pos</td><td>标识位置的指针</td><td bgcolor=#195>length()</td><td>获取当前列表长度</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>start( )</td><td>移动指针列表开头</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>end( ) </td><td>移动指针列表末尾</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>next(  )</td><td>操作指针向后移动</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>prev( )</td><td>操作指针向前移动</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>showList( )</td><td>显示当前列表信息</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>currentPos( )</td><td>获取当前的指针位置</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>insert( element )</td><td>往列表中间插入元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>remove( element )</td><td>删除列表中指定元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>append( element )</td><td>在列表末尾追加元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>moveTo( element,after )</td><td>移动指针到特定位置</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>getCurrentElement( )</td><td>获取当前指向的元素</td></tr>

</tbody>
</table>

```javascript
class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    length() {
        return this.listSize;
    }
    toString() {
        return this.dataStore.join("\n");
    }
    contains(element) {
        let findIndex = this.find(element);
        return findIndex == -1 ? false : true;
    }
    start() {
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
    insert(element, after) {
        let insertIndex = this.find(element);
        if (insertIndex != -1) {
            this.dataStore.splice(insertIndex + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
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
    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
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
        for (let i = 0; i < this.dataStore.length; i++) {
            console.log(`${this.dataStore[i]}`)
        }
    }
}

/* 测试代码： */
let list = new List();
list.append("Yong");
list.append("Jin");
list.append("Xia");
list.append("Ping");
list.showList();
console.log(list.toString())

/* 
[0] Yong
[1] Jin
[2] Xia
[3] Ping
Yong
Jin
Xia
Ping 
*/

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
