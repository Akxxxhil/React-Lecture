import "./Food.css";

function clickHandler() {
  console.log("button is clicked");
}

function Food(props) {
  return (
    <>
      <div className="FoodDiv">
        {props.names}
        <button onClick={clickHandler} className="addto">
          Add To Cart
        </button>
      </div>
    </>
  );
}
export default Food;
