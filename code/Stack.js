class Stack {
    constructor() {
        this.top = 0;
        this.dataStore = [];
    }
    pop() {
        this.dataStore.pop();
        this.top++;
    }
    push(ele) {
        this.dataStore[this.top++] = ele;
    }
    peek() {
        return this.dataStore[this.top - 1];
    }
    clear() {
        this.top = 0;
        this.dataStore = [];
    }
}

/* 测试数据 */
let stack = new Stack();
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