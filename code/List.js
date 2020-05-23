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

/* 0 1 2 3  */

let list = new List();
list.append("Yong");
list.append("Jin");
list.append("Xia");
list.append("Ping");
list.showList();
console.log(list.toString())
    // console.log(list.dataStore);
    // console.dir(list.currentPos());
    // console.log(list.length());
    // console.log(list.pos)
    // console.log(list.next());
    // console.log(list.pos)
    // console.log(list.getCurrentElement());