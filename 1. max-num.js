// To find the maximum number
let arr = [1, 2, 3, 40, 5, 6, 7]
max = 0
for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max);
