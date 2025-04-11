
const itemList = [
    {
        pic: "././images/facewash.jpg",
        itemName: "Facewash"
    },
    {
        pic: "././images/bodylotion.jpg",
        itemName: "Body-Lotion"
    },
    {
        pic: "././images/moisturizer.jpg",
        itemName: "Moisturizer"
    },
    {
        pic: "././images/serum.jpg",
        itemName: "Serum"
    },
    {
        pic: "././images/sunscreen.jpg",
        itemName: "Sunscreen"
    },
];

function CategoryCard() {
    return (
        <>
            {itemList.map((item, index) => (
                <div key={index} className="card">
                    <img src={item.pic} alt={item.itemName} style={{ height: "300px", width: "250px" }} />
                    <h3 className="mb-4">{item.itemName}</h3>
                </div>
            ))}

        </>
    );
}

export default CategoryCard;