import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


function About() {
    return (
        <div className="min-h-screen m-auto about-container">
            <Navigation />

            <div className="about-main">
                <h1 className="text-center">
                    Our Story
                </h1>

                <div className="about-ceo1">
                    <img
                        src="././images/ceo1.jpg"
                        alt="CEO"
                    />
                    <div>
                        <h3>Lorem Ipsum</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatem
                            repudiandae doloremque? Expedita voluptate dignissimos perferendis fuga
                            voluptatibus, laboriosam nesciunt, quisquam corporis dolorum nostrum rem
                            facilis est quas velit eius.
                        </p>
                    </div>
                </div>
                <div className="about-ceo2">

                    <div>
                        <h3>Lorem Ipsum</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatem
                            repudiandae doloremque? Expedita voluptate dignissimos perferendis fuga
                            voluptatibus, laboriosam nesciunt, quisquam corporis dolorum nostrum rem
                            facilis est quas velit eius.
                        </p>
                    </div>
                    <img
                        src="././images/ceo2.jpg"
                        alt="CEO"
                    />
                </div>

                <div className="about-content">
                    <img src="././images/about-ad.jpg" alt="img" />
                    <div className="d-flex">
                        <p>
                            Discover the power of nature with our all-natural skincare products,
                            crafted with pure, organic ingredients to nourish and rejuvenate your
                            skin.

                            Embrace the goodness of botanicals with our all-natural skincare,
                            crafted to nourish, heal, and rejuvenate your skin using the purest
                            plant-based ingredients.
                        </p>
                        <div className="feature-span">
                            <span>
                                100% Natural
                            </span>
                            <span>
                                100% Organic
                            </span>
                            <span>
                                Cruelty Free
                            </span>
                            <span>
                                Paraben Free
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
