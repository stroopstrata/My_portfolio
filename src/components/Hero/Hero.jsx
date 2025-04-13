import React from "react";
import heroImage from "/assets/hero/heroImage.jpg";
import styles from "./Hero.module.css";

export const Hero = ()=> {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi,I'm Vikram</h1>
                <p className={styles.description}>I'm a front end developer and ML enthusiast. Reach out if you like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:vikrampratapbahu@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={heroImage} alt='image of me!' />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}