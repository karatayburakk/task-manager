



const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(a<0 || b<0) {
                return reject('Numbers cant be negative.')
            }
            resolve(a+b)
        },2000)
    })

}



const doWork = async () => {
    const sum = await add(1,2)
    const sum2 = await add(sum, 1)
    const sum3 = await add(sum2,-10)
    return sum3

}

doWork().then((result) => {
    console.log('result: ' + result)
}).catch((err) => {
    console.log('err: ' + err)
})

// add(1,2).then((resolve) => {
//     console.log(resolve)
//     return add(resolve,5)
// }).then((resolve2) => {
//     console.log(resolve2)
//     return add(resolve2, -3)
// }).then((resolve3) => {
//     console.log(resolve3)
// })