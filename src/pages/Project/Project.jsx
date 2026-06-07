import React, { useState } from 'react'
import { projectsData } from '../../data/data'
import styles from './Project.module.css'

const categories = ['Semua', 'Web App', 'Landing Page', 'Database']
const semesters = ['Semua', 'Semester 1 - Kelas XI', 'Semester 2 - Kelas XI']

function Project() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [activeSemester, setActiveSemester] = useState('Semua')

  const filtered = projectsData.filter(p => {
    const catMatch = activeCategory === 'Semua' || p.category === activeCategory
    const semMatch = activeSemester === 'Semua' || p.semester.includes(activeSemester.replace(' - Kelas XI', ''))
    return catMatch && semMatch
  })

  return (
    <div className={styles.projectPage}>
      {/* ===== PAGE HERO ===== */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className="container">
          <p className="section-tag">💼 Portfolio</p>
          <h1 className={styles.pageTitle}>
            Project yang <span>Sudah Dibuat</span>
          </h1>
          <p className={styles.pageDesc}>
            Kumpulan project yang saya kerjakan selama Kelas XI (Semester 1 &amp; 2) — dari web app, landing page, hingga database.
          </p>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>{projectsData.length}</span>
              <span className={styles.statLabel}>Total Project</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>{projectsData.filter(p => p.semester.includes('Semester 1')).length}</span>
              <span className={styles.statLabel}>Semester 1</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>{projectsData.filter(p => p.semester.includes('Semester 2')).length}</span>
              <span className={styles.statLabel}>Semester 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Kategori:</span>
            <div className={styles.filterBtns}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Semester:</span>
            <div className={styles.filterBtns}>
              {semesters.map(sem => (
                <button
                  key={sem}
                  className={`${styles.filterBtn} ${activeSemester === sem ? styles.active : ''}`}
                  onClick={() => setActiveSemester(sem)}
                >
                  {sem}
                </button>
              ))}
            </div>
          </div>
          <p className={styles.resultCount}>
            Menampilkan <strong>{filtered.length}</strong> project
          </p>
        </div>
      </section>

      {/* ===== PROJECT GRID ===== */}
      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🔍</span>
              <p>Tidak ada project yang ditemukan.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }) {
  const categoryColor = {
    'Web App':      { bg: 'rgba(108,99,255,0.12)', color: '#6C63FF', border: 'rgba(108,99,255,0.3)' },
    'Landing Page': { bg: 'rgba(255,101,132,0.12)', color: '#FF6584', border: 'rgba(255,101,132,0.3)' },
    'Database':     { bg: 'rgba(67,233,123,0.12)',  color: '#43E97B', border: 'rgba(67,233,123,0.3)' },
  }
  const colors = categoryColor[project.category] || categoryColor['Web App']

  return (
    <div className={styles.card}>
      {project.featured && <div className={styles.featuredBadge}>⭐ Featured</div>}

      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <div className={styles.cardMeta}>
          <span
            className={styles.categoryBadge}
            style={{ background: colors.bg, color: colors.color, borderColor: colors.border }}
          >
            {project.category}
          </span>
          <span className={styles.yearBadge}>{project.year}</span>
        </div>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc}>{project.description}</p>

      <div className={styles.semesterRow}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        {project.semester}
      </div>

      <div className={styles.techList}>
        {project.tech.map(t => (
          <span key={t} className={styles.techTag}>{t}</span>
        ))}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.statusDot}>
          <span className={styles.dot} />
          {project.status}
        </div>
        <div className={styles.cardLinks}>
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.43 9.81 8.2 11.4.6.11.82-.26.82-.58l-.01-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58C20.57 22.31 24 17.81 24 12.5 24 5.87 18.63.5 12 .5z"/>
            </svg>
            Code
          </a>
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.linkBtnDemo}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
