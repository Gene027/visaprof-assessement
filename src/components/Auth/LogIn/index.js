/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import styles from "./index.module.css";
import { Button } from "@/components/shared/Button";
import { Input, WelcomeMessage } from "../shared";
import { useRouter } from "next/router";
import { ErrorMessage } from "../shared/ErrorMessage";
import { useAuthActions } from "@/actions/auth.actions";

export const LogIn = () => {
  const { push } = useRouter()
  const [ email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { signIn } = useAuthActions()

  const handleLogin = async () => {
      setError(false)
      setLoading(true)
      const response = await signIn(email, password)
      setLoading(false)
      if(response?.error){
        setError(true)
      }
  }

  return (
    <div className={styles["container"]}>
      <img className={styles["left-section"]} src="/login-bg.png" alt="login backround picture" />

      <div className={styles["right-section"]}>
          <WelcomeMessage
              header={'Welcome back!'}
              subHeader={'We’re always excited to have you back.'}
          />

          <div className={styles['input-group']}> 
              <Input
                  type="text"
                  placeholder={'Email address'}
                  className={styles['input']}
                  onChange={e => setEmail(e)}
              />

              <Input
                  type="password"
                  placeholder={'Password'}
                  className={styles['input']}
                  onChange={e => setPassword(e)}
              />
          </div>

          <div className={styles['terms']}>
              <input type="checkbox" name="checked" />
              <div>Keep me signed in</div>
          </div>
          
          <div className={styles["signup-buttons"]}>
              <Button
                  style={{
                      height: "53px",
                      width: "145px",
                  }}
                  disabled = { !email || !password}
                  onClick={handleLogin}
                  loading={loading}
              >
                Sign In
              </Button>
              <span> or sign in with</span>
              <img src="/google-logo.png" alt="google-icon" />
          </div>

          {
              error &&
              <ErrorMessage
                message={"There was an error please try again."}
              />
          }
          
          <div className={styles["sign-in-option"]}>
            Don't have an account? <span onClick={() => push('/auth/signup')}>Sign up</span>
          </div>
        </div>
    </div>
  );
};
