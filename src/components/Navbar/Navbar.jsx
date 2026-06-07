import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { path: '/',        label: 'Home',    icon: '⌂' },
  { path: '/about',   label: 'About',   icon: '👤' },
  { path: '/about#skills', label: 'Skills', icon: '⚡' },
  { path: '/project', label: 'Project', icon: '💼' },
  { path: '/contact', label: 'Contact', icon: '📬' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>A</span>
          <span className={styles.logoText}>
            <span className={styles.logoFirst}>Arif</span>
            <span className={styles.logoDot}>.</span>
            <span className={styles.logoDev}>dev</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.path.includes('#') ? (
                <a href={link.path} className={styles.navLink}>
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:arifstwn@gmail.com"
          className={styles.ctaBtn}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {navLinks.map((link) => (
          link.path.includes('#') ? (
            <a
              key={link.path}
              href={link.path}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.mobileIcon}>{link.icon}</span>
              {link.label}
            </a>
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `${styles.mobileLink} ${isActive ? styles.activeMobile : ''}`
              }
            >
              <span className={styles.mobileIcon}>{link.icon}</span>
              {link.label}
            </NavLink>
          )
        ))}
      </div>
    </nav>
  )
}

export default Navbar
