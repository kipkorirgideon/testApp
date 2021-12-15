import express, { Application, Request, Response } from "express"
import {ITodoList} from "../models/todoSchema"
import {TodoList} from "../controllers/todoController"


module.exports = async(app:Application)=>{
    const todocontroller = new TodoList()
    app.get('/', async(req:Request, res:Response)=>{
        const todolists : any = await todocontroller.getAllTodos(req)
        if (todolists === null){
            return res.status(500).json({success:false})
        }
        return res.status(200).json(todolists)
    })
    app.post('/add', async(req:any, res:Response)=>{
        console.log(req.body)
        const todo :any = await todocontroller.addTodo(req)
        if (todo === null){
            return res.status(500).json({success:false})
        }
        return res.status(200).json(todo)

    })
}