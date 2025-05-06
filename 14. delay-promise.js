async function delay(value, ms){
    await new Promise((resolve =>  setTimeout(() => resolve(value), ms)))
    return value
}

let p = await delay(35, 1000)
console.log(p);
