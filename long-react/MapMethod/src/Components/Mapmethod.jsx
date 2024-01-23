function Mapmethod() {

  //let foodItems = [];
  let foodItems = ["Rice", "Dal","Milk","Fruits"];
  return (
    <>
      <div>
        <h2>Healthy Food</h2>
        {/* This is called a s conditional Rendering */}
        {foodItems.length===0 && <h4>I am still Hungry.</h4>}
        <ul className="list-group">
           {foodItems.map((item)=>(
            <li key={item} className="list-group-item">{item}</li>
           ))}
        </ul>
      </div>
    </>
  );
}

export default Mapmethod;
