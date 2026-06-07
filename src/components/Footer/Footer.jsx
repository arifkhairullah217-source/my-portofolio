import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoIcon}>A</span>
            <div>
              <p className={styles.name}>Muhammad Arif Khairullah Setiawan</p>
              <p className={styles.tagline}>Student Developer &amp; Web Enthusiast</p>
            </div>
          </div>
          <div className={styles.links}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/arifkhairullah217-source" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.43 9.81 8.2 11.4.6.11.82-.26.82-.58l-.01-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58C20.57 22.31 24 17.81 24 12.5 24 5.87 18.63.5 12 .5z"/>
              </svg>
              GitHub
            </a>
            <a href="mailto:arifstwn@gmail.com" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {year} Muhammad Arif Khairullah Setiawan. Built with <span className={styles.heart}>♥</span> using ReactJS &amp; Vite.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
