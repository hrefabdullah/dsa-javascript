async function catchErr(promise){
    return promise.then(value => {
        return value
    }).catch(() => {
        return 0
    })
}

// let rej = Promise.reject('Something wrong here')
// let res = Promise.resolve('Done')

catchErr(rej).then(value => {
    console.log(value);
})