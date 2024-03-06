import "./Cards.css";

function Cards(props) {
  return (
    <>
      <div className="outerBorder">{props.children}</div>
    </>
  );
}
export default Cards;
