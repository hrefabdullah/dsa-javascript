let arr1 = [5, 7, 8]
let arr2 = [3, 4, 6]

function mergeSort(arr1, arr2){
    let mergeArr = new Array(arr1.length + arr2.length)
    let i = j = k = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergeArr[k++] = arr1[i++]
        } else if (arr1[i] > arr2[j]){
            mergeArr[k++] = arr2[j++]
        }
    }

    while(i < arr1.length){
        mergeArr[k++] = arr1[i++]
    }
    while(i < arr2.length){
        mergeArr[k++] = arr2[j++]
    }
    
    console.log(mergeArr);
    
}

mergeSort(arr1, arr2)