import React, { useState } from 'react'

function Todo() {
    const [todoinput,setTodoInput]=useState("")
    function changeHandler(e){
        setTodoInput(e.target.value)

    }


  return (
    <>

      <div className='flex'>
      <input value={todoinput} onChange={changeHandler} type="text" placeholder='Enter Your TODO Here' />
      <button>ADD Todo</button>
      </div>
    </>
  )
}

export default Todo
