let arr = [1, 1, 1, 2, 2, 3]

function rmdups(nums) {
    if (nums.length === 0) return 0;

    let i = 0 
    for (let j = 1; j < nums.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    console.log(nums);
    console.log("Unique : ", i + 1);
}

rmdups(arr)



