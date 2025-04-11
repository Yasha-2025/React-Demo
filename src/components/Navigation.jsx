import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav nav >
      <div className="logo-div">
        <Link to="/">
          <img src="./images/skincare-logo.png" alt="logo" className="logo" />
          <h1>Skincare</h1>
        </Link>
      </div>
      <div className="menu-div">
        <ul>
          <li>Products</li>
          <li>Category</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <button>Login/Register</button>
      </div>
    </nav>
  );
}

export default Navigation;
