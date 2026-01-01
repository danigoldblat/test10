import { AddingMessageToDB } from "../dal/supabaseD.js";
export async function EncryptedMessageS (msg){
    try{
    const Encryption_type= msg.cipher_type    
    const upperCase = msg.message.toUpperCase()
    const reverse =  upperCase.split('').reverse().join('')
    console.log(reverse);
    const encoded =await AddingMessageToDB(reverse,Encryption_type)
    
    
    return encoded
    }catch(error){
        console.error(error)
    }
}
