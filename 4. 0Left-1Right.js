// To shift all zeros to left and ones to right

let arr = [1, 1, 0, 1, 0, 0, 1, 0, 1, 1]
let i = 0
let j = 0

while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j++
    }
    i++
}

console.log(arr)