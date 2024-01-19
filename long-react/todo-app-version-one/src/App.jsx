
import Appname from "./components/Appname";
import Todo1 from "./components/Todo1";
import Todo2 from "./components/Todo2";
import Todo3 from "./components/Todo3";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-center">
        <Appname/>
        <Todo1/>
        <Todo2/>
        <Todo3/>

      </center>
    </div>
  );
}

export default App;


