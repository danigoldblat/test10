import express from "express"
import { RegisterUser , EncryptMessage} from "../controllers/controllers.js"
const router = express.Router()
router.post("/auth/register", RegisterUser)
router.post("/messages/encrypt",EncryptMessage)


export default router