import express from "express"
import { config } from "dotenv"
import CipherVault from "./routes/router.js"
config()
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use("/api",CipherVault)

app.listen(port ,() => {
    console.log(`server runing on http://localhost:${port}`);
    
})