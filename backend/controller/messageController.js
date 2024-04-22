import { Message } from "../models/messageSchema.js";
import {catchErrors} from "../middleware/catchAsyncErrors.js"
export const sendMessage=catchErrors(async (req,res,next)=>{
    const {firstName,lastName,email,phone,message}=req.body;
    if(!firstName ||!lastName ||!email ||!phone ||!message){
        return res.status(400).json({
            success:false,
            message:"Please Fill Complete Form Details"
        })
    }

    await Message.create({firstName,lastName,email,phone,message});
    res.status(200).json({
        success:true,
        message:"Message Send Successfully!"
    })
})