// Algorithm to shift elements by k times  - Block swap reversal algorithm

let arrLeft = [1, 2, 3, 4, 5]
let arrRight = [1, 2, 3, 4, 5]
let k = 2 // any number
k = k % arrLeft.length

const reverse = (arr, i, j) => {
    while (i < j) {
        let c = arr[i]
        arr[i] = arr[j]
        arr[j] = c
        i++
        j--
    }
}

// Shifting to the left
reverse(arrLeft, 0, k-1)
reverse(arrLeft, k, arrLeft.length - 1)
reverse(arrLeft, 0, arrLeft.length - 1)
console.log("Left : ", arrLeft);

// Shifting to the right
reverse(arrRight, 0, arrRight.length - 1)
reverse(arrRight, 0, k-1)
reverse(arrRight, k, arrRight.length - 1)
console.log("Right : ", arrRight);

