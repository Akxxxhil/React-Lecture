import React from 'react'
import Display from './Display'

function Loader() {
  return (
    <div>
      <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",top:"50%"}}>
      <div className="spinner"></div>
      <p>Loading...</p>
      </div>
    </div>
  )
}

export default Loader
