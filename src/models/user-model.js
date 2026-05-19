import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    }
})