import React, { useState } from "react";
import styles from "./index.module.css";
import { Button } from "@/components/shared/Button";
import { Input, WelcomeMessage } from "../shared";
import { useRouter } from "next/router";
import { useAuthActions } from "@/actions/auth.actions";
import { ErrorMessage } from "../shared/ErrorMessage";

export const SignUp = () => {
  const { push } = useRouter();
  const { signUp } = useAuthActions();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignUp = async () => {
    setError(false);
    setLoading(true);
    const response = await signUp(
      firstName,
      lastName,
      phoneNumber,
      email,
      password
    );
    setLoading(false);
    if (response?.error) {
      setError(true);
    }
  };

  return (
    <div className={styles["container"]}>
      <img className={styles["left-section"]} src="/signup-bg.png" alt="login background picture" />
      
      <div className={styles["right-section"]}>
        <WelcomeMessage
          header={"Welcome!"}
          subHeader={"This will only take a minute!"}
        />

        <div className={styles["signup-as-agent"]}>
          Sign up as an agent instead? <span>Sign up as an agent</span>
        </div>

        <div className={styles["input-group"]}>
          <Input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e)}
          />

          <Input
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e)}
          />

          <Input
            type="text"
            placeholder="Email address"
            onChange={(e) => setEmail(e)}
          />

          <Input type="phoneNumber" onChange={(e) => setPhoneNumber(e)} />

          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e)}
          />

          <Input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e)}
          />
        </div>

        <div className={styles["terms"]}>
          <input
            type="checkbox"
            checked={acceptTerms}
            onClick={() => setAcceptTerms((a) => !a)}
          />
          <div>
            I agree to the <span>terms and conditions</span>
          </div>
        </div>

        <div className={styles["signup-buttons"]}>
          <Button
            style={{
              height: "53px",
              width: "145px",
            }}
            loading={loading}
            disabled={
              !email ||
              !password ||
              !firstName ||
              !lastName ||
              !phoneNumber ||
              password !== confirmPassword ||
              !acceptTerms
            }
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <span>or sign up with</span>
          <img src="/google-logo.png" alt="google-icon" />
        </div>

        {error && (
          <ErrorMessage message={"There was an error please try again."} />
        )}

        <div className={styles["sign-in-option"]}>
          Already have an account?{" "}
          <span onClick={() => push("/auth/login")}>Sign in</span>
        </div>
      </div>
    </div>
  );
};
