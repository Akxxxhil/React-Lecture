import "./App.css";
import Items from "./Components/Items";
import Cards from "./Components/Cards";

function App() {
  //let thirdName = "Hi ..I am Doggo";
  return (
    <>
    <div className="personal">Personal Details</div>
    <Cards name="Anshuman Biswal" position="Software Engineer" company="Microsoft"></Cards>
    <Cards name="Smruti Biswal" position="Software Engineer" company="CRED"></Cards>
    <Cards name="Akhil Biswal" position="Software Engineer" company="OLA"></Cards>
      {/* <div className="App">hello everyOne</div>
      <Items name="Hi ..I am Akxxhil"></Items>
      <Items name="Hi ..I am Smruti"></Items>
      <Items name={thirdName}></Items>
      <Items name="Hi ..I am Sudipta"></Items> */}
    </>
  );
}

export default App;
