import { addUserToDB } from "../dal/mongodbD.js"

export async function RegisterUserS(inputUser){
    try{
        const userDB = await addUserToDB(inputUser)
        return userDB
    }catch(error){
        console.error(error)
    }
}