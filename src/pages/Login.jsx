/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/pageNav/PageNav";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
      console.log();
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" onClick={handleLogin}>
            {" "}
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
