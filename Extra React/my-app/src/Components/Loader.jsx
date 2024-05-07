import React from 'react'
import Display from './Display'

function Loader() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",padding:"10px",margin:"10px"}}>
      {/* <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",top:"50%"}}>
      <div className="spinner"></div>
      <p>Loading...</p>
      </div> */}
      {/* shimmer effect */}
      {Array(10).fill("").map(e=><div style={{width:"300px",height:"100px",border:"1px solid green"}}></div>)}
      
    </div>
  )
}

export default Loader
