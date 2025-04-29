// import Slider from "react-slick";
import Card from "./Card.jsx";


const itemList = [
    {
        pic: "././images/facewash.jpg",
        itemName: "Facewash",
    },
    {
        pic: "././images/bodylotion.jpg",
        itemName: "Body-Lotion",
    },
    {
        pic: "././images/moisturizer.jpg",
        itemName: "Moisturizer",
    },
    {
        pic: "././images/serum.jpg",
        itemName: "Serum",
    },
    {
        pic: "././images/sunscreen.jpg",
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
