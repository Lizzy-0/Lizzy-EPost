import { useRef, useState } from "react";
import classes from "../styles/Track.module.css";
import Modal from "./Modal";
export default function TrackItem() {
  const ref = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [trackId, setTrackId] = useState("");
  const [trackIdValid, setTrackIdValid] = useState(true);
  function toggleModal() {
    setShowModal(false);
  }
  function trackHandler(e) {
    e.preventDefault();
    console.log(trackId.length);
    if (trackId.length < 12) {
      setTrackIdValid(false);
    } else {
      setTrackIdValid(true);
      setShowModal(true);
      ref.current.value = "";
      setTrackId("");
    }
  }
  return (
    <div className={classes["track-card"]}>
      {!trackIdValid && (
        <p
          style={{
            color: "red",
            fontSize: "1.3rem",
            position: "relative",
            top: "-7%",
          }}
        >
          Track ID must be 12 characters.
        </p>
      )}
      <form>
        <h4>Track your Order</h4>
        <input
          id="track_id"
          ref={ref}
          onChange={() => setTrackId(ref.current.value)}
          type="text"
          size="20"
          maxLength="12"
          tabIndex="100"
          autoComplete="off"
          placeholder="Enter your Track ID"
        />
        <button onClick={trackHandler}>Submit</button>
      </form>
      {showModal && (
        <Modal onClick={toggleModal}>
          <div>
            <h3>Your Order with ID {trackId} is currently being processed</h3>
          </div>
        </Modal>
      )}
    </div>
  );
}
