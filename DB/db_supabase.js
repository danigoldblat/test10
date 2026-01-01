import { createClient } from "@supabase/supabase-js"
import { config } from "dotenv"
config()

const supabase = createClient(process.env.DB_URL_SUPABASE,process.env.DB_PUBLIC_SECRIT_SUPABASE)

export default supabase 
