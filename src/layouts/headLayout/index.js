import React from "react";
import Head from "next/head";
import styles from "./HeadLayout.module.scss";

function HeadLayout(props) {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>{title} - NatureApp</title>
      </Head>
      <main className={styles.layout}>{children}</main>
    </>
  );
}

export default HeadLayout;
