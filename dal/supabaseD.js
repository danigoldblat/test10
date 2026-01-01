import supabsae from "../DB/db_supabase.js"
export async function AddingMessageToDB(reverse,Encryption_type){
    const {data,error} = await supabsae
    .from( "messages")
    .insert({"message":reverse,"cipherType":Encryption_type})
    .select("*")
    console.log(data);
    
    return data
    }

