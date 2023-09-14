import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "../styles/Sidebar.module.css";
export default function Sidebar({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={classes["sidebar"]}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
        >
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="click-and-drop">Click and Drop</Link>
            </li>
            <li>
              <Link to="postcode">Get PostCode</Link>
            </li>
            <li>
              <Link to="return">Return Item</Link>
            </li>
            <li>
              <Link to="track-item">Track Item</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
