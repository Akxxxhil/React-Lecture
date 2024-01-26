import React from "react";
import Title from "./Components/Title";
import ItemsList from "./Components/ItemsList";
import OuterBorder from "./Components/OuterBorder";
import "./App.css";

function App() {
  return (

    <>
     <OuterBorder>
      <Title></Title>
      <ItemsList></ItemsList>
    </OuterBorder>

    <OuterBorder>
      <p>These are the List of foods that will help you to get a good shape of body.</p>
    </OuterBorder>
    </>
   
  );
}

export default App;


