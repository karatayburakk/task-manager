require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findOneAndUpdate({ _id: '5fe898e3a899d70bb39e8749'}, {age:38}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:38})
// }).then((user) => {
//     console.log(user)
// }).catch((e) => {
//     console.log(e)
// })


// const updateAgeAndCount = async (id,age) => {
//     const user = await User.findByIdAndUpdate(id, {age})
//     const count = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('5fe88b527e4794094d5af2ed', 12).then((count) => {
//     console.log(count)
// })

const deleteAndCount = async (id) => {
    const removedTask = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed: true})

    return count
}

deleteAndCount('5fe8cfcd79175912211618cc').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})