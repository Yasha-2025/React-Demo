// import Slider from "react-slick";
import Card from "./Card.jsx";


const itemList = [
    {
        pic: "././images/products/facewash.jpg",
        itemName: "Facewash",
    },
    {
        pic: "././images/products/bodylotion.jpg",
        itemName: "Body-Lotion",
    },
    {
        pic: "././images/products/moisturizer.jpg",
        itemName: "Moisturizer",
    },
    {
        pic: "././images/products/serum.jpg",
        itemName: "Serum",
    },
    {
        pic: "././images/products/sunscreen.jpg",
        itemName: "Sunscreen",
    },
];

function Bestseller() {

    return (
        <div className="bs-div">
            <h1>Our Bestsellers</h1>
            <div className="card-div">
                {itemList.map((item, index) => (
                    <Card key={index} pic={item.pic} name={item.itemName} />
                ))}
            </div>
        </div>
    );
}

export default Bestseller;
