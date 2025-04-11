import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Contact = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="contact-container">
                <h1 className="text-center">Contact Us</h1>
                <form className="contact-form">
                    <label>Your Name *</label>
                    <input type="text" name="name" required />
                    <label>Email ID *</label>
                    <input type="email" name="email" required />
                    <label>Contact No. *</label>
                    <input type="tel" name="phone" required pattern="[0-9]{10}" />
                    <label>Message *</label>
                    <textarea name="message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Contact;
