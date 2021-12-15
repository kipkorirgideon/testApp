import mongoose , {Document} from "mongoose"
export interface ITodoList extends Document{
    title:string,
    desc:string | number,
    isCompleted:boolean
}
const todoSchema = new mongoose.Schema({
    title:{type:String, required:true},
    desc:{type:String, required:true},
    isCompleted:{type:Boolean, required:true, default:false}
})
module.exports = mongoose.model<ITodoList>('todo_list', todoSchema)