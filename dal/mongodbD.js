import { ObjectId } from "mongodb"
import mongoDB from "../DB/db_mongo.js"

export async function addUserToDB(inputUser){
    const new_date = new Date() 
    let Count = 0
    const result = await mongoDB.collection("users").insertOne({
        username:inputUser.username,
        password:inputUser.password,
        encryptedMessagesCount:Count,
        createdAt:`${new_date.getDate()}/${new_date.getMonth()+1}/${new_date.getFullYear()}`
    })
    
    return result
}

