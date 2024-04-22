import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

const server = express()

server
      .use(cors())
      .use(express.json())
      .get("/health", (req,res)=> res.send("OK!"))

      server.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`)
    })