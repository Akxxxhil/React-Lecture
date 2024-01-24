import styles from "./App.module.css"
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";

function App() {
  return (
    <>
     <div className={styles.bordersurface}>
     <div className={styles.outline}>
        <Display></Display>
        <Buttons></Buttons>
      </div>
     </div>
    </>
  );
}

export default App;
