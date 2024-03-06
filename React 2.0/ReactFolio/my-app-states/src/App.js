import "./App.css";
import AddForm from "./Components/AddForm";
import Tod from "./Components/Tod";

function App() {
  return (
    <>
      <div>
        <Tod name="apple"></Tod>
        <Tod name="Microsoft"></Tod>
      </div>
      <div>
        <AddForm></AddForm>
      </div>
    </>
  );
}

export default App;
