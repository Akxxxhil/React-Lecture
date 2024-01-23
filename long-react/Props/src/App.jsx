import Title from './Components/Title'
import ListFood from './Components/ListFood'
import './App.css'

function App() {
  let foodItems=["Dal","Rice","Smru","Tingu"]
  let title="What are Healthy Foods ?"

  return (
    <>
     <Title title={title} ></Title>
     <ListFood foodItems={foodItems}></ListFood>
    </>
  )
}

export default App
