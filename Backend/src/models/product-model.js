import mongoose, { mongo } from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
    },
    bgcolor:{
        type:String,
    },
    panelcolor:{
        type:String,
    },
})