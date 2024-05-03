import { createContext, useState } from "react";

export const TodoContext = createContext({})

export default function TodoProvider({ children }) {
    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState([])
    const [updateTodo, setUpdateTodo] = useState("")
    const [deletetodo, setDeleteTodo] = useState("")
    const [completetodo, setCompleteTodo] = useState("")

    const Addingtodo=(todo)=>{
        setTodo((prev)=> [...todo,...prev])
    }
    



    const value = {
        todo,
        setTodo,
        addTodo,
        setAddTodo,
        updateTodo,
        setUpdateTodo,
        deletetodo,
        setDeleteTodo,
        completetodo,
        setCompleteTodo
    }

    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>

}

