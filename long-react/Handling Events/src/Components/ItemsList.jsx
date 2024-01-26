import styles from "./Itemslist.module.css";

function ItemsList() {
  let Listitems = ["Rice", "Roti", "Dal", "Milk", "Salad"];
  return (
    <>
      <ul className="list-group">
        {Listitems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
            <button
              onClick={() => {
                console.log(`${item} is Purchased`);
              }}
              className={`${styles.buttons} btn btn-success`}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ItemsList;
