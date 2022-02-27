import "./Header.scss";

import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <h1>Header </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header; 
