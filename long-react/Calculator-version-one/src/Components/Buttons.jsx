import React from "react";
import styles from  "./Buttons.module.css"

function Buttons() {
  let ButtonArray = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {ButtonArray.map((item, index) => (
        <button className={styles.button} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
