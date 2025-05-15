class node {
    constructor(value) {
        this.head = value
        this.next = null
    }
}

class linkedList {
    constructor(value){
        this.head = new node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value){
        let newNode = new node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
}

const liList = new linkedList(1)
liList.push(2)
liList.push(3)
liList.push(4)
console.log(liList.tail.next);
