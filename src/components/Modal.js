import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "../styles/Modal.module.css";

function BackDrop(props) {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
export default function Modal(props) {
  return (
    <Fragment>
      {createPortal(
        <BackDrop onClick={props.onClick} />,
        document.getElementById("overlays")
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
}
