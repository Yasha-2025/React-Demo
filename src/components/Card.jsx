function Card({ pic, name }) {
  return (
    <div className="card">
      <img src={pic} alt={name} style={{ height: "300px", width: "300px", marginBottom: "5%" }} />
      <div className="description">
        <a href="#">{name}</a>
        <div className="btn">
          <button className="me-6">
            <img src="././images/icons/add-to-cart.png" alt="add-to-cart" />
          </button>
          <button>
            <img src="././images/icons/wishlist.png" alt="wishlist" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
