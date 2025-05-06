// Binary Search (my understanding)

let arr = [1, 2, 3, 4, 5, 6, 7]

function findMe(arr, start, end, target){

    if (start > end) return 'Not found!'

    const mid = Math.floor((start + end) / 2)

    if(arr[mid] === target) return `Target is ${arr[mid]}`
    else if(arr[mid] < target){
        return findMe(arr, mid + 1, end, target)
    } else if(arr[mid] > target){
        return findMe(arr, start, mid-1, target)
    }
}

let target = findMe(arr, 0, arr.length - 1, 2)
console.log(target);

