function Mapmethod() {
  let foodItems = ["Rice", "Dal","Milk","Fruits"];
  return (
    <>
      <div>
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
