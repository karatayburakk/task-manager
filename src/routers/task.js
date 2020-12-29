const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.get('/tasks', auth ,async (req,res) => {


    try {
    const tasks = await Task.find({owner: req.user._id})
    res.send(tasks)

    } catch (e) {
        res.send(e)
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // })
    // .catch((error) => {
    //     res.send(error)
    // })
})

router.get('/tasks/:id', auth ,async (req,res) => {

    const _id = req.params.id

    try {
        // const task = await Task.findById(_id)

        const task = await Task.findOne({ _id, owner: req.user._id})

        if(!task){
            res.status(404).send()
        }
        res.send(task)
        

    } catch (e) {
        res.status(500).send(e)
    }

    // Task.findById(_id).then((task) => {
    //     if(!task){
    //         res.status(404).send()
    //     }
    //     res.send(task)
    // })
    // .catch((e) => {
    //     res.status(500).send(e)
    // })

})

router.post('/tasks', auth ,async (req,res) => {

    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {

    await task.save()
    res.status(201).send(task)

    } catch (e) {
        res.status(400).send(e)
    }

    // task.save().then((task) => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })

})

router.patch('/tasks/:id', auth ,async (req,res) => {

    const updates = Object.keys(req.body)
    const validOperations = ['completed', 'description']
    const isValidOperation = updates.every((update) => validOperations.includes(update))


    if(!isValidOperation) {
        return res.status(400).send({error: 'Unvalid operation!'})
    }

    try {
        
        const task = await Task.findOne({_id: req.params.id, owner: req.user._id})
                
        if(!task) {
            return res.status(404).send()
        }

        updates.forEach((update) => {
            task[update] = req.body[update]
        })

        await task.save()
        res.send(task)

    } catch(e) {
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id', auth, async (req,res) => {

    try {


        const task = await Task.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if(!task) {
            return res.status(404).send()
        }

        res.send(task)

    } catch(e) {

        res.status(500).send(e)

    }




})

module.exports = router