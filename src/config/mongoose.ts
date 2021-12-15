import { Application } from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const uri = process.env.DATABASE
module.exports  = async(app:Application)=>{
    require('../models/todoSchema')
    mongoose.connect(uri!)
    const con = mongoose.connection
    con.on('open', async()=>{
        console.log(`Database is connected`)

    })
    con.on('close', async()=>{
        console.log(`Database is disconnected`)

    })
}