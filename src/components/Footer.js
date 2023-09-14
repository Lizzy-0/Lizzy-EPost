import "../styles/footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="home">our services</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Link to="click-and-drop">shipping</Link>
              </li>
              <li>
                <Link to="return">returns</Link>
              </li>
              <li>
                <Link to="track-item">order status</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="click-and-drop">Send a Package</Link>
              </li>
              <li>
                <Link to="track-item">Track a Package</Link>
              </li>
              <li>
                <Link to="postcode">Get your Postcode</Link>
              </li>
              <li>
                <Link to="click-and-drop">Buy Post Cards</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
