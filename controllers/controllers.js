import {RegisterUserS} from "../services/mongodbS.js"
import {EncryptedMessageS} from "../services/supabaseS.js"
export const RegisterUser = async (req , res) => {
    try{
        const inputUser = req.body
        const newUser =await RegisterUserS(inputUser)
        res.status(201).json(newUser)
    }catch(error){
        console.error(error)
    }
}
export const EncryptMessage = async (req ,res) => {
    try{
        const msg = req.body
        const EncryptedMsg = EncryptedMessageS(msg)
        res.status(201).json(EncryptedMsg)
    }catch(error){
        console.error(error)
    }
}