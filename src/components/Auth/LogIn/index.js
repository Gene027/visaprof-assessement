/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.css";
import { Button } from "@/components/shared/Button";

export const LogIn = () => {
  return (
    <div className={styles["container"]}>
      <img src="/login-bg.png" alt="login backround picture" />

      <div className={styles["right-section"]}>
        <div className={styles["welcome-message"]}>
          <div className={styles["message"]}>Welcome back!</div>
          <div className={styles["sub-message"]}>
            We're always excited to have you back.
          </div>
        </div>

        <div>
          <form action="" method="post">
            <input
              type="email"
              required
              placeholder="Email address"
              name="email"
              value={form.email}
            />
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              value={form.password}
            />
            <label htmlFor="checkbox">Keep me Signed in</label>
            <input type="checkbox" name="checked" value={form.checked} />

            <div className={styles["sign-in-opt"]}>
              <Button>Send</Button>
              <div>
                or sign in with <img src="" alt="google-icon" />
              </div>
            </div>
          </form>
        </div>

        <div className={styles["sign-up-opt"]}>
          Don't have an account? <a href="http://">Sign up</a>
        </div>
      </div>
    </div>
  );
};
