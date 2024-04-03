import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './App.css'
import Cards from './Components/Cards'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
      <div className="outerdiv">
      <Cards title="Card 1" description="Description 1"></Cards>
      <Cards title="Card 2" description="Description 2"></Cards>
      <Cards title="Card 3" description="Description 3"></Cards>
      <Cards title="Card 4" description="Description 4"></Cards>
      </div>
    </>
  )
}

export default App
