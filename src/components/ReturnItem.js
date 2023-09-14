import { useState } from "react";
import classes from "../styles/ReturnItem.module.css";
import Modal from "./Modal";
export default function ReturnItem() {
  const [showModal, setShowModal] = useState(false);
  function toggleModal(e) {
    e.preventDefault();
    setShowModal(!showModal);
  }
  return (
    <>
      <form className={classes["return-item"]}>
        <h1>Return an Item</h1>
        <label for="orderNumber">Order Number:</label>
        <input type="text" name="orderNumber" required />

        <label for="returnReason">Reason for Return:</label>
        <textarea name="returnReason" required></textarea>

        <label for="contactEmail">Contact Email:</label>
        <input type="text" name="contactEmail" required />

        <button onClick={toggleModal} type="submit">
          Submit
        </button>
      </form>
      {showModal && (
        <Modal onClick={toggleModal}>
          <div>
            <h3 style={{ textAlign: "center" }}>
              We have receied your request and get back to you shortly via the
              email you provided.
              <br /> Thank you for contacting us.
            </h3>
          </div>
        </Modal>
      )}
    </>
  );
}
