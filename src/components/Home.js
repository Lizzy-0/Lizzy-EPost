import classes from "../styles/Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import parcels from "../images/parcels.jpg";
import stamp1 from "../images/stamp1.jpg";
import stamp2 from "../images/stamp2.jpg";
import stamp3 from "../images/stamp3.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Home() {
  const navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    navigate("/track-item");
  }
  return (
    <>
      <section className={classes["section1"]}>
        <div className={classes.left}>
          <img src={parcels} alt="" />
          <div className={classes.card}>
            <h1>Send and Track your packages</h1>
            <Link to="/click-and-drop">
              Send Now <i class="fab fa-arrow-right"></i>{" "}
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <form>
            <h4>Track your Order</h4>
            <input
              id="track_id"
              type="text"
              size="20"
              maxlength="15"
              tabindex="100"
              autocomplete="off"
              placeholder="Enter your Track ID"
            />

            <button onClick={submitHandler}>Submit</button>
          </form>
        </div>
      </section>
      <hr />
      <section className={classes.help}>
        <div className={classes["help-col"]}>
          <h2>Sending Mail</h2>
          <p>Click and Drop</p>
          <Link to="/click-and-drop">
            <BsFillArrowRightCircleFill size="2rem" color="#f4558a" />
          </Link>
        </div>
        <div className={classes["help-col"]}>
          <h2>Track your Item</h2>
          <p>Track Deliveries</p>
          <Link to="/track-item">
            <BsFillArrowRightCircleFill size="2rem" color="#f4558a" />
          </Link>
        </div>
        <div className={classes["help-col"]}>
          <h2>Your Postal Code</h2>
          <p>Get your postcode</p>
          <Link to="/postcode">
            <BsFillArrowRightCircleFill size="2rem" color="#f4558a" />
          </Link>
        </div>
        <div className={classes["help-col"]}>
          <h2>Services Near You</h2>
          <p>Find Our Location</p>
          <Link to="/contact">
            <BsFillArrowRightCircleFill size="2rem" color="#f4558a" />
          </Link>
        </div>
      </section>
      <hr />
      <section className={classes["stamps.section"]}>
        <div className={classes["stamps-header"]}>
          <h1>Our Postage Stamps</h1>
          <p>We Sell Good Postage Stamps</p>
        </div>
        <div className={classes.stamps}>
          <img src={stamp1} alt="" />
          <img src={stamp2} alt="" />
          <img src={stamp3} alt="" />
        </div>
      </section>
    </>
  );
}
