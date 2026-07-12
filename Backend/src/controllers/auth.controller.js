import userModel from "./../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
async function sendTokenResponse(user,res,message){
    const token = jwt.sign({
        id : user._id,

    },config.JWT_SECRET,{
        expiresIn : "7d"
    });
    res.cookie("token",token);
    res.status(200).json({
        message,
        success : true,
        user : {
            id : user._id,
            email : user.email,
            contact : user.conatct,
            fullname : user.fullname,
            role : user.role
        }
    })
}

export const register = async (req,res) => {
    const {email,password,contact,fullname,iSeller} = req.body;
    try{
        const existingUser = await userModel.findOne({
            $or : [
                {email},
                {contact}
            ]
        });
        if(existingUser){
            return registerUser.status(400).json({
                message : "User with this email or conatct already exists"
            })
        };
        const user = await userModel.create({
            email,
            conatct,
            password,
            fullname,
            role : isSeller?"seller":"buyer"
        });
        await sendTokenResponse(user,res,"User Registered Successfully")
    }catch(err){
        console.log(err);
        return res.status(500).join(
            {
                message : "Server Error"
            }
        )
    }
}