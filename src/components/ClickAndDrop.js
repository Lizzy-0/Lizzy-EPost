import classes from "../styles/ClickAndDrop.module.css";
import xs from "../images/xs.jpg";
import s from "../images/s.jpg";
import m from "../images/m.jpg";
import l from "../images/l.jpg";
import xl from "../images/xl.jpg";
import xxl from "../images/xxl.jpg";
import delivery from "../images/delivery.jpg";

export default function ClickAndDrop() {
  return (
    <section className={classes["send-item"]}>
      <div className={classes["send-item-image"]}>
        <img src={delivery} alt="" />
      </div>
      <div className={classes["send-item-card"]}>
        <div className={classes["send-item-card-content"]}>
          <h2 className={classes["send-item-card-title"]}>
            Send and Receive Packages
          </h2>
          <p className={classes["send-item-card-p"]}>
            Your items can be sent and recieved very easily
          </p>
        </div>
      </div>
      <h1 style={{ fontSize: "2rem", textAlign: "center", padding: "40px 0" }}>
        Price Plans
      </h1>

      <div className={classes.prices}>
        <div className={classes.plan}>
          <h2>Letter</h2>
          <p>Up to 100g</p>
          <p>From $0.75</p>
          <img src={xs} alt="" />
        </div>
        <div className={classes.plan}>
          <h2>Large Letter</h2>
          <p>Up to 250g</p>
          <p>From $1.05</p>
          <img src={s} alt="" />
        </div>
        <div className={classes.plan}>
          <h2>Small Parcel</h2>
          <p>Up to 2kg</p>
          <p>From $2.99</p>
          <img src={m} alt="" />
        </div>
        <div className={classes.plan}>
          <h2>Medium Parcel</h2>
          <p>Up to 20kg</p>
          <p>From $4.35</p>
          <img src={l} alt="" />
        </div>
        <div className={classes.plan}>
          <h2>Tube</h2>
          <p>Up to 20kg</p>
          <p>From $4.35</p>
          <img src={xl} alt="" />
        </div>
        <div className={classes.plan}>
          <h2>Large Parcel</h2>
          <p>Up to 30kg</p>
          <p>From $12.12</p>
          <img src={xxl} alt="" />
        </div>
      </div>
    </section>
  );
}
