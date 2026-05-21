import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    userAddres:{
        type:String,
    },
    phone_no:{
        type:Number,
        maxlength:"10",
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user",
    }

},
{
    timeStamp:true,
})

const User = mongoose.model("User", userSchema);

export {User};