async function catchErr(promise){
    return promise.catch(() => {
        return 0
    })
}

let rej = Promise.reject('Something wrong here')
let res = Promise.resolve('Done')

catchErr(res).then(value => {
    console.log(value);
})