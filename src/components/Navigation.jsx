import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="logo-div">
        <Link to="/">
          <img src="./images/skincare-logo.png" alt="logo" className="logo" />
          <h1>Skincare</h1>
        </Link>
      </div>
      <div className="menu-div">
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <Link to="/login">
          <button>Login/Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
