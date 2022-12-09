import casamaya from "../images/casamaya.png"

function Footer () {


    return (
        <div className="footer">
            <div className="footerlogo">
                <img src={casamaya}/>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>884.902.4571</p>
                <p>info@casamaya.com</p>
            </div>
        </div>
    )
}

export default Footer;