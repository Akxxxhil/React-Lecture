import "./Cards.css";

function Cards(props) {
  return (
    <>
      <div className="border">
        <div>{props.name}</div>
        <div> {props.position}</div>
        <div>{props.company}</div>
      </div>
    </>
  );
}
export default Cards;
