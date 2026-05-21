import express from 'express';
import { ApiError } from '../utility/apiError.js';
import {User} from '../models/user-model.js';
import { ApiResponse } from '../utility/apiResponse.js';
import { asyncHandler } from '../utility/asyncHandler.js';


const userRegister = asyncHandler((async(req,res)=>{
    const {email, username, password} = req.body;


    //checking if user have fill all the details
    if([email,username,password].some((fields) =>{
        return fields?.trim() === "";
    })){throw new ApiError(400, "Required to fill all the form details")}


//checking if user exist
    const userExist = await User.findOne({
        $or:[{username}, {email}]});
    if(userExist){
        throw new ApiError(400, "user already exist");
    }
    //creating user in db;
    const createUser = await User.create({
        email,
        password,
        username,
    });

    //checking if user is correctly saved in the db;

    const user = await User.findById(createUser._id);
    if(!user){
        throw new ApiError(500, "User is not saved/register properly in the DataBase");
    };

    res.status(200).json(
        new ApiResponse(200, "user successfull registered")
    )
}))

export {userRegister};