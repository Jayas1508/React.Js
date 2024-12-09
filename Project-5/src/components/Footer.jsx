import logo from "../assets/logo.png";
import Location from "../assets/location.svg";
import Mail from "../assets/mail.svg";
import Call from "../assets/grenncall.svg";
import Plan from "../assets/plan.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Basketball from "../assets/basketball.svg";
import Footer1 from "../assets/footer-1.jpg";
import Footer2 from "../assets/footer-2.jpg";
import Footer3 from "../assets/footer-3.jpg";
import Footer4 from "../assets/footer-4.jpg";
import Footer5 from "../assets/footer-5.jpg";
import InstaWhite from "../assets/insta-white.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="custom-container">
          <div class="row">
            <div class="col-3">
              <div className="footer-logo">
                <img src={logo} alt="logo" />
              </div>
              <p className="footer-text">
                Carrot is the biggest market of grocery products. Get your daily
                needs from our store.
              </p>
              <div className="footer-data">
                <p className="location">
                  <img src={Location} alt="location" />
                  <div>
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </div>
                </p>
                <p className="mail">
                  <img src={Mail} alt="mail" />
                  <div>jay@email.com</div>
                </p>
                <p className="call">
                  <img src={Call} alt="call" />
                  <div>+91 7600075211</div>
                </p>
              </div>
            </div>
            <div class="col-3">
              <div className="footer-company">
                <h3>Company</h3>
                <ul>
                  <li>About Us</li>
                  <li>Delivery Information</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                  <li>Support Center</li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div className="footer-category">
                <h3>Category</h3>
                <ul>
                  <li>Dairy & Bakery</li>
                  <li>Fruits & Vegetable</li>
                  <li>Snack & Spice</li>
                  <li>Juice & Drinks</li>
                  <li>Chicken & Meat</li>
                  <li>Fast Food</li>
                </ul>
              </div>
            </div>
            <div class="col-3">
              <div className="footer-newsletter">
                <h3>Subscribe Our Newsletter</h3>
                <div>
                  <form class="d-flex" role="search">
                    <input
                      class="footer-search form-control me-2"
                      type="search"
                      placeholder="Search here..."
                      aria-label="Search"
                    />
                    <div><img src={Plan} alt="send" className="plan"/></div>
                  </form>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/" className="facebook" target="_blank"><img src={Facebook}  alt="facebook"/></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src={Twitter} alt="twitter"/></a>
                    <a href="https://www.dribble.com/" target="_blank"><img src={Basketball} alt="basketball"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="instagram"/></a>
                </div>
                <div className="news-image">
                  <div className="footer-news-image">
                    <img src={Footer1} alt="image" />
                    <div className="overlay"><img src={InstaWhite} alt="" /></div>
                  </div>
                  <div className="footer-news-image">
                    <img src={Footer2} alt="image" />
                    <div className="overlay"><img src={InstaWhite} alt="" /></div>
                  </div>
                  <div className="footer-news-image">
                    <img src={Footer3} alt="image" />
                    <div className="overlay"><img src={InstaWhite} alt="" /></div>
                  </div>
                  <div className="footer-news-image">
                    <img src={Footer4} alt="image" />
                    <div className="overlay"><img src={InstaWhite} alt="" /></div>
                  </div>
                  <div className="footer-news-image">
                    <img src={Footer5} alt="image" />
                    <div className="overlay"><img src={InstaWhite} alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="footer-bottom">
            <div className="footer-bottom-text">
              © 2024 <span><a href="#">Carrot</a></span> Market. All rights reserved
            </div>
          </div>
      </div>
    </>
  );
};

export default Footer;