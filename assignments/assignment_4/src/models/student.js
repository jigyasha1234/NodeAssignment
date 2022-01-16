const mongoose = require("mongoose");
const velidator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    email:{
        type: String,
        required: true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    ispromoted:{
        type: Boolean,
        required: true,
    },
})