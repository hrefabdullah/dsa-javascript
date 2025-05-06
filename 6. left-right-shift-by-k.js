// left shift by k times with swapping

let arr = [1, 2, 3, 4, 5, 6]
let k = 1
for (let j = 1; j < k+1; j++){
    for (let i = arr.length - 1; i > 0 ; i--){
        [arr[i], arr[0]] = [arr[0], arr[i]]
    }
}

console.log(arr);


// left shift by x times without swapping

let arr1 = [1, 2, 3, 4, 5, 6]
let x = 1
let first = arr1[0]
for (let i = 1; i < x+1; i++){
    for (let j = 0; j < arr1.length - 1; j++){
        arr1[j] = arr1[j+1]
    }
}
arr1[arr1.length - 1] = first

console.log(arr1);


// right shift by k times with swapping

let arr2 = [1, 2, 3, 4, 5, 6]
let k2 = 1
for (let j = 1; j < k2+1; j++){
    for (let i = 1; i < arr.length; i++){
        [arr2[i], arr2[0]] = [arr2[0], arr2[i]]
    }
}

console.log(arr2);


// right shift by x times without swapping

let arr3 = [1, 2, 3, 4, 5, 6]
let x2 = 1
let last = arr3[arr3.length - 1]
for (let i = 1; i < x+1; i++){
    for (let j = arr3.length - 1; j > 0; j--){
        arr3[j] = arr3[j-1]
    }
}
arr3[0] = last

console.log(arr3);


// More efficient algorithm for shifting right

let arr4 = [1, 2, 3, 4, 5, 6]
let tempArr = new Array(arr4.length)
let n = 1
n = n % arr4.length
for (let i = 0; i < arr4.length; i++){
    tempArr[i] = arr4[(i+(arr.length - n)) % arr4.length]   // temp[i] = arr4[(i+n) % arr4.length] - for left shiting
}

console.log(tempArr);



