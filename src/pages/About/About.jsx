import React, { useState } from 'react'
import { profileData, educationData, skillsData } from '../../data/data'
import styles from './About.module.css'

const categories = ['Semua', 'Frontend', 'Backend', 'Tools', 'Design']

function About() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const filteredSkills = activeCategory === 'Semua'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory)

  return (
    <div className={styles.about}>
      {/* ===== HERO ===== */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className="container">
          <p className="section-tag">👤 About Me</p>
          <h1 className={styles.pageTitle}>
            Tentang <span>Saya</span>
          </h1>
          <p className={styles.pageDesc}>
            Seorang pelajar yang antusias di dunia web development, selalu penasaran dan siap belajar hal baru.
          </p>
        </div>
      </section>

      {/* ===== PROFILE ===== */}
      <section className={`${styles.profile} section`}>
        <div className="container">
          <div className={styles.profileGrid}>
            {/* Avatar Card */}
            <div className={styles.avatarCard}>
              <div className={styles.avatarWrap}>
                <div className={styles.avatar}>
                  {profileData.avatar
                    ? <img src={profileData.avatar} alt="Arif" className={styles.avatarImg} />
                    : <span className={styles.avatarInitial}>A</span>
                  }
                </div>
                <div className={styles.avatarGlow} />
              </div>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>👤</span>
                  <div>
                    <p className={styles.infoLabel}>Nama</p>
                    <p className={styles.infoValue}>Muhammad Arif Khairullah Setiawan</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <p className={styles.infoLabel}>Lokasi</p>
                    <p className={styles.infoValue}>{profileData.location}</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>🎓</span>
                  <div>
                    <p className={styles.infoLabel}>Sekolah</p>
                    <p className={styles.infoValue}>SMA IT HSI</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>📖</span>
                  <div>
                    <p className={styles.infoLabel}>Jurusan</p>
                    <p className={styles.infoValue}>Tahfidz & IT</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>✉️</span>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <p className={styles.infoValue}>{profileData.email}</p>
                  </div>
                </div>
              </div>
              <div className={styles.socialRow}>
                <a href={profileData.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.43 9.81 8.2 11.4.6.11.82-.26.82-.58l-.01-2.01c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58C20.57 22.31 24 17.81 24 12.5 24 5.87 18.63.5 12 .5z"/>
                  </svg>
                  GitHub
                </a>
                <a href={`mailto:${profileData.email}`} className={styles.socialLink}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className={styles.bioSection}>
              <h2 className={styles.bioTitle}>
                Halo, Saya <span className={styles.bioName}>Arif</span> 👋
              </h2>
              <p className={styles.bioText}>{profileData.bio}</p>
              <p className={styles.bioText}>
                Saya sedang menempuh pendidikan di <strong>SMA IT HSI</strong> dengan program unggulan <strong>Tahfidz Al-Qur'an</strong> sekaligus jurusan <strong>Informatika & Teknologi (IT)</strong>. Di sekolah ini saya belajar menyeimbangkan antara menghafal Al-Qur'an dan mengembangkan kemampuan di bidang teknologi.
              </p>
              <p className={styles.bioText}>
                Di waktu luang, saya suka mengeksplorasi teknologi baru, mengikuti tutorial, dan mencoba membuat proyek kecil untuk memperkuat pemahaman saya.
              </p>
              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <span className={styles.hlIcon}>🎯</span>
                  <p className={styles.hlText}>Fokus pada Web Development</p>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.hlIcon}>📚</span>
                  <p className={styles.hlText}>Aktif belajar teknologi baru</p>
                </div>
                <div className={styles.highlight}>
                  <span className={styles.hlIcon}>🤝</span>
                  <p className={styles.hlText}>Terbuka untuk kolaborasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className={`${styles.education} section`}>
        <div className="container">
          <div className="section-header">
            <p className="section-tag">🎓 Education</p>
            <h2 className="section-title">Latar Belakang <span>Pendidikan</span></h2>
          </div>
          <div className={styles.timeline}>
            {educationData.map((edu, idx) => (
              <div key={edu.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <span>{idx + 1}</span>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.institution}>{edu.institution}</h3>
                    <span className={styles.year}>{edu.year}</span>
                  </div>
                  <p className={styles.major}>{edu.major}</p>
                  <p className={styles.eduDesc}>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className={`${styles.skillsSection} section`}>
        <div className="container">
          <div className="section-header">
            <p className="section-tag">⚡ Skills</p>
            <h2 className="section-title">Keahlian <span>Teknis</span></h2>
            <p className="section-desc">Teknologi dan tools yang saya gunakan dalam pengembangan proyek.</p>
          </div>

          {/* Filter */}
          <div className={styles.filterRow}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid — card style */}
          <div className={styles.skillsGrid}>
            {filteredSkills.map(skill => (
              <div key={skill.id} className={styles.skillCard}>
                <div className={styles.skillCardTop}>
                  <div className={styles.skillIconWrap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                  <span className={styles.skillCategoryBadge}>{skill.category}</span>
                </div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <div className={styles.skillBarWrap}>
                  <div className={styles.skillBar}>
                    <div className={styles.skillFill} style={{ width: `${skill.level}%` }} />
                  </div>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
