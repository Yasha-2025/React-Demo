import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Bestseller from "../components/Bestseller";
import Ad from "../components/Ad";
import ShopCategory from "../components/ShopCategory";
import Standards from "../components/Standards";
import Footer from "../components/Footer";

function Home() {
    return <div>
        <Navigation />
        <Hero />
        <Bestseller />
        <Ad />
        <ShopCategory />
        <Standards />
        <Footer />
    </div>;
}

export default Home;
