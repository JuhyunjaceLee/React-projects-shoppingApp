import React from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setLog, setAuth }) {
  const navigate = useNavigate();
  const goToLog = (e) => {
    e.preventDefault();
    navigate("/");
    setAuth(true);
    setLog("로그아웃");
  };
  return (
    <form className={styles.login_form}>
      <label htmlFor="email">EMAIL ADDRESS</label>
      <input
        id="email"
        className={styles.email}
        type="email"
        autoComplete="off"
      />
      <label htmlFor="password">PASSWORD</label>
      <input
        id="password"
        className={styles.password}
        type="password"
        autoComplete="off"
      />
      <button className={styles.login_btn} type="submit" onClick={goToLog}>
        LOGIN
      </button>
    </form>
  );
}
