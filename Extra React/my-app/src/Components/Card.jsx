import React from 'react'
import Cards from './Cards'

function Card({carddetails}) {
  return (
    <div style={{
        padding: "10px",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px"
      }}>
      
    {carddetails.map((eachcard)=>{
        return <div key={eachcard.id}>
            <Cards eachcard={eachcard} ></Cards>
        </div>
    })}
    </div>
  )
}

export default Card
