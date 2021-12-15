import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app  = express()

dotenv.config()
app.use(express.json())

require('./config/mongoose')(app)
const port = process.env.PORT





require('./routes/routes')(app)

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})