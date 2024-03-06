import "./Tod.css";

function Tod(props) {
  function clickHandler() {
    console.log("mark clicked");
  }
  return (
    <>
      <div className="outerdiv">
        <div>{props.name}</div>
        <button className="buttono" onClick={clickHandler}>
          Mark
        </button>
      </div>
    </>
  );
}
export default Tod;