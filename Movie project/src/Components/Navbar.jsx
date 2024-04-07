import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="outerNav">
        <NavLink to="/MovieTube">MovieTube</NavLink>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Career">Career</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact us</NavLink>
          </li>
        </ul>

        <div className="btn-navbar">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
