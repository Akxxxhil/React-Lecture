import Appname from "./components/Appname";
import Todo1 from "./components/Todo1";
import TodoItemstotal from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "19-01-2024",
    },
    {
      name: "Buy Bread",
      dueDate: "20-01-2024",
    },
    {
      name: "Buy Eggs",
      dueDate: "21-01-2024",
    },
  ];

  return (
    <div>
      <center className="todo-center">
        <Appname />
        <Todo1 />
        <TodoItemstotal todoItems={todoItems}></TodoItemstotal>
      </center>
    </div>
  );
}

export default App;