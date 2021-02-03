import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Thing } from "@antlaht86/mylib";

export default function Home() {
  return (
    <div className={styles.container}>
      <Thing />
      <h3>moi</h3>
    </div>
  );
}
