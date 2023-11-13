import logo from "../assets/images/favIcon-rem.png";
import Nav from "./Nav";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="one">
          <img src={logo} alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
          <h5>Navigation</h5>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
            <li>
              <a href="/">LogIn</a>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <a id="nav" href="phone">
                Phone Number
              </a>
            </li>
            <li>
              <a id="nav" href="email">
                Email
              </a>
            </li>
            <li>
              <a id="nav" href="address">
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>

            <li>
              <a id="nav" href="insta">
                Instagram
              </a>
            </li>
            <li>
              <a id="nav" href="linkedin">
                LinkedIn
              </a>
            </li>
            <li>
              <a id="nav" href="pintrest">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
