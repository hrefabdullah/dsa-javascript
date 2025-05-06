// To find the second maximum number
let arr = [1, 28, 5, 290, 3, 340]
var max = 0
var smax = 0
index = 0

for (let i = 0; i < arr.length; i++){
    if ( max < arr[i] ){
        max = arr[i]
        index = i
    }
}

arr.splice(index, 1)
console.log(arr);


for (let i = 0; i < arr.length; i++){
    if ( smax < arr[i] ){
        smax = arr[i]
    }
}

console.log(max)
console.log(smax);


// efficient method
let arr2 = [1, 462, 50, 34]
var max2 = 0
var smax2 = 0

for (let i = 0; i < arr2.length; i++){
    if ( max2 < arr2[i] ){
        smax2 = max2
        max2 = arr2[i]
    } else if ( smax2 < arr2[i] && arr2[i] !== max2){
        smax2 = arr2[i]
    }
}

console.log(max2);
console.log(smax2);


 