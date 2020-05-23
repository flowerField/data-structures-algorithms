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
class Queue {
    constructor(queue) {
        this.dataStore = queue || [];
    }
    enqueue(ele) {
        this.dataStore.push(ele);
    }
    dequeue() {
        return this.dataStore.shift();
    }
    isEmpty() {
        return this.dataStore.length == 0 ? true : false;
    }
    toString() {
        return this.dataStore.join("\n");
    }
}

function radixSort(list) {

    /* 1.创建10个盒子 */
    let bins = [];
    for (let i = 0; i < 10; i++) {
        bins[i] = new Queue();
    }

    /* 先把数字分配到对应的盒子中保存 */
    function allocation(list, queues, radix) {
        list.forEach((ele, idx) => {
            if (radix == 1) {
                queues[ele % 10].enqueue(ele);
            } else {
                queues[Math.floor(ele / 10)].enqueue(ele);
            }
        })
    }

    /* 把盒子中的数据都取出来保存为列表 */
    function collect(list, queues) {
        let i = 0;
        for (let index = 0; index < queues.length; index++) {
            const queue = queues[index];
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

let list = [8, 21, 43, 82, 41, 24, 67, 37];

console.log(radixSort(list));