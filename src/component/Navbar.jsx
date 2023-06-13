import React from "react";
import styles from "./Navbar.module.css";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar({ log, setLog, setAuth }) {
  const navigate = useNavigate();
  const logBtn = () => {
    navigate("/login");
    {
      if (log === "로그아웃") {
        setLog("로그인");
        setAuth(false);
      }
    }
  };
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.navbar}>
      <button className={styles.nav_login} onClick={logBtn}>
        <FaUserCircle />
        <span>{log}</span>
      </button>
      <button className={styles.logo} onClick={goToHome}>
        JUHYUN`s Clothing Store
      </button>
    </div>
  );
}
