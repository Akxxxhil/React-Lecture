
import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState ={
    todo:[{
        id:1,
        text:"hello"
    }]
}

export const TodoSlicer=createSlice({
    name:"todo",
    initialState ,
    reducers:{
      addTodo:(state,actions)=>{
        const todoss={
            id:nanoid(),
            text:actions.payload
        }
        state.todo.push(todoss)
       
      },
      removeTodo:(state,actions)=>{
        state.todo=state.todo.filter((todoeach)=>todoeach.id!==actions.payload)
      }
    }
})

export const{addTodo,removeTodo}=TodoSlicer.actions
export default  TodoSlicer.reducer



