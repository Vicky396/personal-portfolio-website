import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "../Hero/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Vikash</h1>
            <p className={styles.description}>I am Software developer with expertise in Frontend Development with React.</p>
            <a className={styles.contactBtn} href="mailto:vikashsingh396@gmail.com">Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="heroimage"  className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
