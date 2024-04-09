import React, { useState, useContext } from "react";
import UserConetxt from "../Context/Usercontext.js";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const{setUser}=useContext(UserConetxt)

  function submitHandler(e) {
    e.preventDefault();
    setUser({username,password})

  }
  function changehandler(e) {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        name="username"
        onChange={changehandler}
        type="text"
        value={username}
        placeholder="Username"
      /> <br /> <br />

      <input value={password} name="password" type="text" placeholder="Password" onChange={changehandler} /><br /> <br />

      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Login;
