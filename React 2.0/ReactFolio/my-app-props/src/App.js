
import "./App.css";
import Cards from "./Components/Cards";
import Food from "./Components/Food";

function App() {
  return (
    <>
      <Cards>
        <Food names="Apple"></Food>
        <Food names="Mango"></Food>
        <Food names="Grapes"></Food>
      </Cards>
    </>
  );
}

export default App;

// cards is the green color border
