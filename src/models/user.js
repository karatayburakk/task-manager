const mongoose = require('mongoose')
const validator = require('validator/validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('invalid mail address.')
            }
        }

    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value<0){
                throw new Error('Age must be positive number.')
            }

        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(value.length < 7){
            throw new Error('Password must be greater than 6 characters')
        }
        if(value.includes('password')){
            throw new Error('Password should not match with word it self')
        }

    }
}
})


module.exports = User