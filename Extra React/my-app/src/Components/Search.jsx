import React, { useState } from 'react'

function Search({setSearchquery}) {
    const [text,setText]=useState("")
    function inputhandler(e){
        setText(e.target.value)
       
    }
    function clickhandler(){
      setSearchquery(text)
     
    }
  return (
    <div>
      <div>
        <input onChange={inputhandler} type="text" value={text} />
        <button onClick={clickhandler}>Search</button>
      </div>
    </div>
  )
}

export default Search
