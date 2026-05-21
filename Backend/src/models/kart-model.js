import mongoose, { SchemaTypes } from "mongoose";

const kartSchema = new mongoose.Schema({
    product:{
        type: mongoose.SchemaType.Objectid,
        ref:"product",
        quantity:{
            type:Number,
        }
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:"User"
    }
});

const Kart  = mongoose.model("Kart", kartSchema);