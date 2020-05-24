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