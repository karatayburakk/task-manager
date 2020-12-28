const mongoose = require('mongoose')
const validator = require('validator/validator')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
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


userSchema.statics.findByCredentials = async (email,password) => {

    const user = await User.findOne({email})

    if(!user){

        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Unable to login')
    }

    return user

}


userSchema.pre('save', async function (next) {

    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()

} )

const User = mongoose.model('User', userSchema)


module.exports = User