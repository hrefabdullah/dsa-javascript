class myArray {
    constructor() {
        this.length = 0,
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item,
        this.length += 1
    }

    get(idx) {
        return this.data[idx]
    }

    pop() {
        delete this.data[this.length - 1]
        this.length -= 1
    }

    shift() {
        for (let i = 0; i < this.length; i++){
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1] 
        this.length --
    }
    
    dltByIdx(idx) {
        for (let i = idx; i < this.length; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1]
        this.length -= 1
        
    }
}

const myNewArray = new myArray()
myNewArray.push('Apple')
myNewArray.push('Mango')
myNewArray.push('Banana')
myNewArray.push('Orange')
myNewArray.push('Kiwi')
myNewArray.push('Papaya')
myNewArray.push('Pineapple')
// const apple = myNewArray.get(2)
// myNewArray.pop()
// myNewArray.shift()
myNewArray.dltByIdx(3)
console.log(myNewArray);