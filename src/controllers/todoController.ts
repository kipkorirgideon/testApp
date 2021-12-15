import { ITodoList } from "../models/todoSchema";
import mongoose from "mongoose"
const Todo = mongoose.model<ITodoList>('todo_list')
export class TodoList{
    async getAllTodos(req:any){
        try {
            const todos: ITodoList[] = await Todo.find({})
            return todos  
        } catch (error) {
            return null
            
        }

    }
    async addTodo(req:any){
        try {
            const todo : ITodoList = new Todo()
            todo.title = req.body.title
            todo.desc = req.body.desc
            todo.isCompleted = req.body.isCompleted
            await todo.save()
            console.log(todo)
            return todo
            
        } catch (error) {
            return null
            
        }

    }

}