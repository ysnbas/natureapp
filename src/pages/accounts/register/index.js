import React from "react";
import Link from "next/link";
import styles from "./Register.module.scss";

/* Components */
import TextField from "@Components/TextField";
import Button from "@Components/Button";
import Wrapper from "@Components/Wrapper";

/* Layouts */
import HeadLayout from "@Layouts/headLayout";

const Register = () => {
  const currentDate = new Date();
  const fullYear = currentDate.getFullYear();
  return (
    <HeadLayout title="Kayıt Ol">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>NatureApp</h1>
        </div>
        <div className={styles.createAccountContainer}>
          <p>Zaten Bir Hesabın Var Mı?</p>
          <a className={styles.createAccount}>
            <Link href="/accounts/login">Giriş Yap</Link>
          </a>
        </div>
        <Wrapper>
          <form>
            <TextField label={"İsim"} placeholder={"İsim"} type={"text"} />
            <TextField
              label={"Soyisim"}
              placeholder={"Soyisim"}
              type={"text"}
            />
            <TextField label={"Mail"} placeholder={"Mail"} type={"Mail"} />
            <TextField
              label={"Şifre"}
              placeholder={"Şifre"}
              type={"password"}
            />
            <Button text={"Kayıt Ol"} color={"primary"} />
          </form>
        </Wrapper>
        <div className={styles.footer}>@ {fullYear} NatureApp</div>
      </div>
    </HeadLayout>
  );
};
export default Register;
