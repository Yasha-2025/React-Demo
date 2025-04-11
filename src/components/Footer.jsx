import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="left">
        <Link to="/">
          <img src="./images/skincare-logo.png" alt="logo" />
          <h1>Skincare</h1>
        </Link>
      </div>
      <div className="middle">
        <h2>Connect with Us</h2>
        <ul>
          <li>Email: skincare@yopmail.com</li>
          <li>Phone: 9876543210</li>
        </ul>
        <div className="social">
          <img src="././images/icons/ig.png" alt="Instagram" />
          <img src="././images/icons/fb.png" alt="Facebook" />
          <img src="././images/icons/wtsp.png" alt="WhatsApp" />
          <img src="././images/icons/lin.png" alt="LinkedIn" />
        </div>
      </div>
      <div className="right">
        <h2>About Skincare</h2>
        <ul>
          <li>Bulk Orders</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Refund Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
