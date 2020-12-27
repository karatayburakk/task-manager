//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error,client) => {
    if(error) {
        return console.log('Unable to connect database.')
    }

    console.log('Connected to database correctly.')

    const db = client.db(databaseName)


    // ******************************************** 
    // ******************************************** 
    // ********************CREATE******************
    // ******************************************** 
    // ******************************************** 

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // })

    // ************************

    // db.collection('users').insertOne({
    //     name: 'Maximilian',
    //     age: 19
    // })

    // ************************

    // db.collection('users').insertMany([{name: 'Jen', age: 28}, {name: 'Gunther', age: 27}], (error, result) => {

    //     if(error){
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops)

    // })

    // ************************

    // db.collection('tasks').insertMany([{description: 'task1', completed: true}, {description: 'task2', completed: false}, {description: 'task3', completed: true}],
    // (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents.')
    //     }


    //     console.log(result.ops)
    // } )

    // ******************************************** 
    // ******************************************** 
    // ********************READ********************
    // ******************************************** 
    // ******************************************** 

    // db.collection('users').findOne({ _id: new ObjectID('5fe856c61c492f03fe113c43')}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // ************************

    // db.collection('users').find({ age: 27}).toArray((error, users) => {
    //     if(error) {
    //         return console.log('unable...')
    //     }
    //     console.log(users)

    // })

    // ************************

    // db.collection('tasks').findOne({_id: new ObjectID('5fe857c1f4f2e40419d1f223')}, (err, result) => {
    //     console.log(result)
    // })

    // ************************

    // db.collection('tasks').find({completed: true}).toArray((err,result) => {
    //     console.log(result)
    // })

    // ******************************************** 
    // ******************************************** 
    // ********************UPDATE******************
    // ******************************************** 
    // ********************************************

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5fe856c61c492f03fe113c42')
    // }, 
    // {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }, ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // ************************

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5fe856c61c492f03fe113c42')
    // },
    // {
    //     $inc: {
    //         age: 5
    //     }
    // })

    // updatePromise.then((resolve) =>{
    //     console.log(resolve)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: true

    // },
    // {
    //     $set: {
    //         completed: false
    //     }
    // }).then((resolve) => {
    //     console.log(resolve)
    // }).catch((err) => {
    //     console.log(err)
    // })

    // ******************************************** 
    // ******************************************** 
    // ********************DELETE******************
    // ******************************************** 
    // ********************************************

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // 


})