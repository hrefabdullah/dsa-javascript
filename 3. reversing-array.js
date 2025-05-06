// Reversing arrays

let arr = [3, 4, 5, 6, 7]
let rArr = []

for ( let i = arr.length - 1; i > -1; i--){
    rArr.push(arr[i])
}

console.log(arr)
console.log(rArr)


// Another method 

let arr1 = [1, 2, 3, 4, 5, 6]
let left = 0
let right = arr1.length - 1
console.log("Orignal array : ", arr1)

while(left < right){
    // [arr1[left], arr1[right]] = [arr1[right], arr1[left]]
    var tem = arr1[left]
    arr1[left] = arr1[right]
    arr1[right] = tem
    left++
    right--
}

console.log("Reversed array : ", arr1)