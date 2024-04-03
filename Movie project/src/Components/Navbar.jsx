function Navbar() {
  return (
    <>
      <div className="outerNav">
        <h1>MovieTube</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Career</li>
          <li>Contact us</li>
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
