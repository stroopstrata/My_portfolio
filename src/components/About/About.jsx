import React from "react";
import styles from "./About.module.css";
import aboutImage from "/assets/about/aboutImage.jpg";
import cursorIcon from "/assets/about/cursorIcon.png";


export const About = ()=> {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>ABOUT</h1>
            <div className={styles.content}>
                <img src={aboutImage} className={styles.aboutImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="cursor Icon"/>
                        <div  className={styles.aboutItemtext}>
                            <h2 >Frontend Developer</h2>
                            <p >I'm a frontend developer with experience in building responsive sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="cursor Icon"/>
                        <div  className={styles.aboutItemtext}>
                            <h2 >ML Developer</h2>
                            <p >I'm a ML enthusiast with project work in image and video classification</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="cursor Icon"/>
                        <div  className={styles.aboutItemtext}>
                            <h2 >Problem Solver</h2>
                            <p >I love to solve problems and their solutions</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}