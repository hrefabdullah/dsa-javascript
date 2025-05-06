async function handleSandF(arr){

    let resultArr = []

    for(let i = 0; i < arr.length; i++){
        try{
            const value = await arr[i]
            resultArr.push(value)
        }
        catch{

        }
    }
    return resultArr
}

const promises = [
    Promise.resolve(10),
    Promise.reject('Error'),
    Promise.resolve(20),
    Promise.reject('Another Error'),
    Promise.resolve(30)
  ];

let ans = await handleSandF(promises)
console.log(ans);
