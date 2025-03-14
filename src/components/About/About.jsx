import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "../About/About.module.css"
export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt="aboutImage" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer experience in building robust and optimized sites.</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I'm a Backend developer experience in building robust and optimized sites.</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={getImageUrl("about/uiIcon.png")} alt="ui" />
                <div className={styles.aboutItemText}>
                    <h3>Database Developer</h3>
                    <p>I'm a Database developer experience in building robust and optimized databases.</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
