// Adding result of two promises
// 1. using Promise.all method 
async function twoPromises(p1, p2){
    return Promise.all([p1, p2]).then(data => data[0] + data[1])
}

// 2. Without using Promise.all method
async function twoProms(p1, p2) {
    return p1.then(value1 => {
        return p2.then(value2 => {
            return value1 + value2
        })
    })
}


let p1 = new Promise((resolve => setTimeout(() => resolve(2), 20)))
let p2 = new Promise((resolve => setTimeout(() => resolve(8), 70)))
let total = await twoProms(p1, p2)
console.log(total);
