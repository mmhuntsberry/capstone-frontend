import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AuthForm.module.css";

const signupContent = {
  title: "Signup",
  route: "signup",
  buttonText: "Signup!",
};

const signinContent = {
  title: "Signin",
  route: "signin",
  buttonText: "Signin!",
};

const AuthForm = ({ formType = "signin", setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const content = formType === "signup" ? signupContent : signinContent;

  // useEffect(() => {
  //   console.log({ token });
  // }, [token]);

  useEffect(() => {
    console.log({ message });
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://capstone-backend-liart.vercel.app/${content.route}`, {
        email,
        password,
      })
      .then((res) => {
        if (formType === "signup") {
          setMessage(res.data.message);
        } else {
          setToken(res.data.token);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{content.title}</h2>
      <label className={styles.label}>
        Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className={styles.label}>
        Password
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input type="submit" value={content.buttonText} />
    </form>
  );
};

export default AuthForm;
