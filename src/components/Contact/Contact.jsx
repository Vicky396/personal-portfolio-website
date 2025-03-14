import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../Contact/Contact.module.css";
export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
                <a href="mailto:vikashsingh396@gmail.com">vikashsingh396@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
                <a href="">Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
                <a href="">Github</a>
            </li>
        </ul>
    </footer>
  )
}
