import { Link } from "react-router-dom";

function Card({ pic, name }) {
  return (
    <div >
      <div className="bs-card">
        <img src={pic} alt={name} style={{ height: "280px", width: "300px", marginBottom: "5px" }} />
        <div className="description">
          <a href="#">{name}</a>
          <div className="btn">
            <Link to="/products/product-name">
              <button className="me-6">
                <img src="././images/icons/add-to-cart.png" alt="add-to-cart" />
              </button></Link>
            <button>
              <img src="././images/icons/wishlist.png" alt="wishlist" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
