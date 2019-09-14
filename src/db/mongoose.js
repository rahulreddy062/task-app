const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-app-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Not valid email ')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        mixLength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Not a valid password')
            }
        }
    }
})
const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})
