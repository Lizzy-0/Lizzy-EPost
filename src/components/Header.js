import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import classes from "../styles/Header.module.css";
import { useAnimation, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Cookies from "universal-cookie";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cookies = new Cookies();
  const controls = useAnimation();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      controls.start("closed");
    }
    setUsername(cookies.get("username") || "Guest");
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    controls.start(isOpen ? "closed" : "open");
  };
  function logout() {
    signOut(auth);
    navigate("/signup");
    cookies.remove("username");
    cookies.remove("auth-token");
  }
  const [username, setUsername] = useState("Guest");
  return (
    <>
      <div className={classes.nav}>
        <div className={classes["hamburger-button"]} onClick={toggleMenu}>
          <motion.div
            className={classes["bar"]}
            variants={{
              open: { rotate: 45, y: 6 },
              closed: { rotate: 0, y: 0 },
            }}
            initial="closed"
            animate={controls}
          ></motion.div>
          <motion.div
            className={classes["bar"]}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            initial="closed"
            animate={controls}
          ></motion.div>
          <motion.div
            className={classes["bar"]}
            variants={{
              open: { rotate: -45, y: -6 },
              closed: { rotate: 0, y: 0 },
            }}
            initial="closed"
            animate={controls}
          ></motion.div>
        </div>
        <h1>Lizzy E-Post</h1>
        <h3>
          {username} <br />
          <button onClick={logout}>Logout</button>
        </h3>
      </div>
      <Sidebar show={isOpen} />
    </>
  );
}
