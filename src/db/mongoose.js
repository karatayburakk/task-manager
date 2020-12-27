const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


// const me = new User({
//     name: 'Burak',
//     age: 'thisis'
// })


// me.save().then((me) => {
//     console.log(me)

// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// const task2 = new Task({
//     description:'task2',
//     completed: true
// })


// task2.save().then(()=>{
// console.log(task2)
// }).catch((errror) => {
//     console.log(error)
// })