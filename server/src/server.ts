import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectToDatabase } from "./db"
import { userRouter } from "./router"

dotenv.config({path: "./.env"})
const uri = process.env.URI

connectToDatabase(uri!)
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use(cors())

        app.use("/", userRouter)

        app.listen(3000, () => { console.log(3000) })
    })