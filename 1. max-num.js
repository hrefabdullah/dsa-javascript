// To find the maximum number
let arr = [1, 2, 3, 40, 5, 6, 7]
let  max = 0 
for (let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max);