function ListFood(props){
return <>
<ul className="list-group">
    {props.foodItems.map((item)=>(
        <li key={item} className="list-group-item">{item}</li>
    ))}
  
</ul>
</>
}

export default ListFood


