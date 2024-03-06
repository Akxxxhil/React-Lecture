import { useState } from "react";

function AddForm() {
  const [company,setComapny]=useState("")

  function valueChange(event){
    console.log(event.target.value);
    setComapny(event.target.value);


  }
  return (
    <>
      <form>
        <div>
          <input type="text" onChange={valueChange}></input>
        </div>
        <button>Add</button>
      </form>
    </>
  );
}
export default AddForm;
