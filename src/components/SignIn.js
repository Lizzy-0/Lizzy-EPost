import { Link, useNavigate } from "react-router-dom";
import classes from "../styles/Auth.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import Cookies from "universal-cookie";
export default function SignIn() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  function signInHandler(e) {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        cookies.set("auth-token", cred.user.refreshToken);
        cookies.set("username", username);
        navigate("home");
        setLoading(false);
      })
      .catch((e) => {
        // console.log(e.message);
        setError(e.message);
        setLoading(false);
      });
  }
  function googleAuth(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((cred) => {
        cookies.set("auth-token", cred.user.refreshToken);
        cookies.set("username", username);
        navigate("/home");
      })
      .catch((e) => {
        setError(e.message);
      });
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className={classes["auth-page"]}>
      <form onSubmit={signInHandler}>
        <p style={{ paddingBottom: "2rem", color: "red" }}>{error}</p>
        <h1>Sign In</h1>
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} value={email} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        {loading ? (
          <button disabled={true}>Loading...</button>
        ) : (
          <button className={classes.sign}>Sign In</button>
        )}
        <div className={classes.buttons}>
          <button onClick={googleAuth}>Sign In With Google</button>
        </div>
        <Link to="signup">Create an Account</Link>
      </form>
    </div>
  );
}
