import "./Cards.css";
function Cards({name,bestFood}) {
  return (
    <>

       
       <div className="cards">
            <p>{name}</p>
            <p>{bestFood}</p>
        </div>
      
     
    </>
  );
}
export default Cards;
