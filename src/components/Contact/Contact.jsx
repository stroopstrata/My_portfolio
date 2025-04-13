import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Contact.module.css";

export const Contact = ()=>{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:vikrampratapbahu@gmail.com">vikrampratapbahu@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                    <a href="https://www.linkedin.com/in/vikram-pratap-singh-51a0a0272">linkedin.com/vikram-pratap-singh</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/stroopstrata">github.com/vikrampratapsingh</a>
                </li>
            </ul>
        </footer>
    );
}