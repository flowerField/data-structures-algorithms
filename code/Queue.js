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
    clear() {
        this.dataStore = [];
        this.queueSize = 0;
    }
}

/* 测试数据 */
let q = new Queue([100, 200, 300]);
console.log(q.length());
q.enqueue(400);
console.log(q.toString())
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