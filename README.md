# data-structures-algorithms
Introduce common data structures and algorithms in JavaScript


## 常用基础数据结构

### [Tree]()


<div align=center><img src="./src/tree.png" height="250px" ></div>

> <font face="微软雅黑" size = 5 color = #195 >`二叉树(   BST )的 JavaScript 语言实现。`</font>

```javascript
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

```

### [List]()

> <font face="微软雅黑" size = 5 color = #195 >`列表( List )的抽象数据类型定义。`</font>

<table>
<thead>
<tr><th>数据结构</th><th>内部属性</th><th>属性说明</th><th>核心方法</th><th>功能介绍</th></tr>
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
<tr><td></td><td></td><td></td><td bgcolor=#195>moveTo( position )</td><td>移动指针到特定位置</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>remove( element )</td><td>删除列表中指定元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>append( element )</td><td>在列表末尾追加元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>insert( element,after )</td><td>往列表中间插入元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>getCurrentElement( )</td><td>获取当前指向的元素</td></tr>
</tbody>
</table>

<img src="./src/list.png">

列表( [List]() )是一组有序的数据，列表中的数据项称为元素，数据项可以是任意类型。

列表( [List]() )有长度，长度为零的列表称为空列表，列表适用于简单的待办事项列表、购物清单和排行榜等场景，在下面给出列表的 JavaScript 语言实现。


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
```

<hr>

### [Queue]()

<img src="./src/queue_t.png" width="650px">

> <font face="微软雅黑" size = 5 color = #195 >`队列( Queue )的抽象数据类型定义。`</font>

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
<tr><td>  Queue 队列</td><td bgcolor=#195>dataStore</td><td>内部数据</td><td bgcolor=#195>start( )</td><td>获取队首元素</td></tr>
<tr><td></td><td bgcolor=#195>queueSize</td><td>队列长度</td><td bgcolor=#195>back( )</td><td>获取队尾元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>clear( )</td><td>清理队列内容</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>length( )</td><td>获取队列长度</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>enqueue( )</td><td>队尾添加元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>dequeue( )</td><td>队首移出元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>isEmpty( )</td><td>队列是否为空</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>toString( ) </td><td>显示队列元素</td></tr>
</tbody>
</table>

<img src="./src/queue_t2.png" width="700px">

队列( [ Queue]() )是一种列表，是一种先进先出( `FIFO` )的数据结构。

队列( [ Queue]() )用于存储按顺序排序的数据，在操作队列的时候遵循的是先进先出的原则，主要操作是入队( `新增元素` )和出队( `删除元素` )，队列也有长度，队列适用于处理多个动画任务的执行、打印任务池等场景，下面给出队列的 JavaScript 语言实现。

```javascript
class Queue {
    constructor(queue) {
        this.dataStore = queue || [];
        this.queueSize = queue.length || 0;
    }
    start() {
        return this.dataStore[0];
    }
    end() {
        return this.dataStore[this.dataStore.length - 1];
    }
    toString() {
        return this.dataStore.join("\n");
    }
    isEmpty() {
        return this.dataStore.length == 0 ? true : false;
    }
    enqueue(element) {
        this.dataStore.push(element);
        ++this.queueSize;
    }
    dequeue() {
        this.dataStore.shift();
        --this.queueSize;
    }
    length() {
        return this.queueSize;
    }
}

```

### [Stack]()
> <font face="微软雅黑" size = 5 color = #195 >`栈(  Stack )的抽象数据类型定义`</font>

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
<tr><td>  Stack 栈</td><td bgcolor=#195>dataStore</td><td>内部数据</td><td bgcolor=#195>push( )</td><td>元素入栈操作</td></tr>
<tr><td></td><td bgcolor=#195>top</td><td >栈顶指针</td><td bgcolor=#195> pop( )</td><td>元素出栈操作</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>peek( )</td><td>获取栈顶元素</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>clear( )</td><td>清理栈的内容</td></tr>
<tr><td></td><td></td><td></td><td bgcolor=#195>length( )</td><td>获取栈的长度</td></tr>
</tbody>
</table>

<img src="./src/stack.png" width="750px">

栈( [Stack]() )是一种后进先出( `LIFO` )的数据结构。

```javascript
class Stack {
    constructor() {
        this.top = 0;
        this.dataStore = [];
    }
    pop() {
        this.dataStore[--this.top];
    }
    push(element) {
        this.dataStore[this.top++] = element;
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    clear() {
        this.top = 0;
        this.dataStore = [];
    }
    length() {
        return this.top;
    }
}
```

## [博客文章]()
[数据结构与算法 [01]-数组、链表和选择排序](http://wendingding.com/2016/10/13/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%20[01]-%E6%95%B0%E7%BB%84%E5%92%8C%E9%93%BE%E8%A1%A8%E3%80%81%E9%80%89%E6%8B%A9%E6%8E%92%E5%BA%8F%E4%B8%8E%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F/)

[数据结构与算法 [02]-栈、队列和递归](http://wendingding.com/2016/11/16/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%20[02]-%E6%A0%88%E3%80%81%E9%98%9F%E5%88%97%E4%B8%8E%E9%80%92%E5%BD%92/)

[数据结构与算法 [03]-栈的实现和应用](http://wendingding.com/2016/11/16/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%20[03]-%E6%A0%88%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%92%8C%E5%BA%94%E7%94%A8(JavaScript)/)
