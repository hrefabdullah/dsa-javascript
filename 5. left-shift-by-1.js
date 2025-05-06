// Shifting elements by one element to left
let arr = [1, 2, 3, 4, 5, 6]
for (let i = arr.length - 1 ; i > 0; i--){
    [arr[i], arr[0]] = [arr[0], arr[i]] 
}
console.log(arr);


// Shifting elements by one element to right
let arr1 = [1, 2, 3, 4, 5, 6]
for (let i = 1; i < arr1.length; i++){
    [arr1[0], arr1[i]] = [arr1[i], arr1[0]]
}
console.log(arr1);


// Method to shift to the left without swapping
let arr2 = [1, 2, 3, 4, 5, 6]
first = arr2[0]
for (let i = 0; i < arr2.length - 1; i++){
    arr2[i] = arr2[i+1]
}
arr2[arr2.length - 1] = first
console.log(arr2);


// Method to shift to the right without swapping
let arr3 = [1, 2, 3, 4, 5, 6]
last = arr3[arr3.length - 1]
for (let i = arr3.length - 1; i > 0; i--){
    arr3[i] = arr3[i-1]
}
arr3[0] = last
console.log(arr3);
