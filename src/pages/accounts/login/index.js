import React from "react";
import Link from "next/link";
import styles from "./Login.module.scss";

/* Components */
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import Wrapper from "@Components/Wrapper";

/* Layouts */
import HeadLayout from "@Layouts/headLayout";

const Login = () => {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();

  return (
    <HeadLayout title="Giriş Yap">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>NatureApp</h1>
        </div>
        <div className={styles.createAccountContainer}>
          <p>Burada Yeni Misin?</p>
          <a className={styles.createAccount}>
            <Link href="/accounts/register">Kayıt Ol</Link>
          </a>
        </div>
        <Wrapper>
          <form>
            <TextField label={"Mail"} placeholder={"Mail"} type={"mail"} />
            <TextField
              label={"Şifre"}
              placeholder={"Şifre"}
              type={"password"}
            />
            <Button text={"Giriş Yap"} color={"primary"} />
          </form>
        </Wrapper>
        <div className={styles.footer}>@ {fullYear} NatureApp</div>
      </div>
    </HeadLayout>
  );
};

export default Login;
