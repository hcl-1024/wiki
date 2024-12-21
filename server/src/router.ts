import express from "express"
import dotenv from "dotenv"
import { collections } from "./db.js"
import nodemailer from "nodemailer"

export const userRouter = express.Router()
dotenv.config()

userRouter.get("/:id", async (req: Request, res) => {
    try{
        const page = await collections.pages.findOne({_id: req.url.split("/")[1]})
    } catch(e) {
        res.status(500).send(e.message)
    }
})

userRouter.post("/request_edit", async (req, res) => {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });
          
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: req.body.headings+" "+req.body.index+" "+req.body.id, // Subject line
            text: req.body.content, // plain text body
        });
          
        console.log("Message sent: %s", info.messageId);
          
    } catch(e) {
        res.status(500).send(e.message)
    }
})
