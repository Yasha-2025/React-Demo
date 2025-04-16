import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <nav id="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="./images/skincare-logo.png" alt="logo" className="logo" />
                    <h1>Skincare</h1>
                </Link>
            </div>

            {location.pathname === "/login" ? (
                <Link to="/register">
                    <button>Register</button>
                </Link>
            ) : (
                <Link to="/login">
                    <button>Login</button>
                </Link>
            )}
        </nav>
    );
}

export default Navbar;
