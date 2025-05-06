function quickSort(arr, left = 0, right = arr.length - 1){
    if(left >= right) return;

    let pivot = arr[Math.floor((left + right) / 2)]
    let index = partition(arr, left, right, pivot)

    quickSort(arr, left, index - 1)
    quickSort(arr, index, right)
    return arr
}

function partition(arr, left, right, pivot){
    while (left <= right){
        while(arr[left] < pivot){
            left++
        }
        while(arr[right] > pivot){
            right--
        }

        if(left <= right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left ++
            right --
        }
    }
    return left
}

let arr = [3, 4, 2, 1, 8, 7]
quickSort(arr)
console.log(arr);
