import React from 'react';

function Cards({eachcard}) {
  return (
    <div style={{border: "5px solid green", padding: "20",height:"27vh"}}>
        <p>{eachcard.name}</p>
        <p>{eachcard.username}</p>
    </div>
  )
}

export default Cards;
