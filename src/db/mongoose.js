const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// const me = new User({
//     name: '   Veli',
//     email: 'VELI@example.com',
//     age: 23,
//     password: 'password1234'
// })


// me.save().then((me) => {
//     console.log(me)

// }).catch((error) => {
//     console.log(error)
// })



// const task2 = new Task({
//     description:'task1234'
// })


// task2.save().then(()=>{
// console.log(task2)
// }).catch((errror) => {
//     console.log(error)
// })