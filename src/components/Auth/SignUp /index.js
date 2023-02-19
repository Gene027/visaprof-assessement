/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./index.module.css";
import { Button } from "@/components/shared/Button";

export const SignUp = () => {
  return (
    <div className={styles["container"]}>
      <img src="/login-bg.png" alt="login backround picture" />

      <div className={styles["right-section"]}>
        <div className={styles["welcome-message"]}>
          <div className={styles["message"]}>Welcome!</div>
          <div className={styles["sub-message"]}>
            This will only take a minute!
          </div>
        </div>

        <div>
          <form action="" method="post">
            <div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="First name"
                  name="firstName"
                  value={form.firstName}
                />
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
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="First name"
                  name="firstName"
                  value={form.firstName}
                />
                <input type="tel" value={form.email} />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                />
              </div>
            </div>

            <label htmlFor="checkbox">I agree to the <a href="http://">terms and conditions</a></label>
            <input type="checkbox" name="checked" value={form.checked} />

            <div className={styles["sign-in-opt"]}>
              <Button>Sign Up</Button>
              <div>
                or sign up with <img src="" alt="google-icon" />
              </div>
            </div>
          </form>
        </div>

        <div className={styles["sign-up-opt"]}>
          Already have an account? <a href="http://">Sign in</a>
        </div>
      </div>
    </div>
  );
};
