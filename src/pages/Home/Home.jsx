import React from 'react'
import { Link } from 'react-router-dom'
import { profileData, skillsData, projectsData } from '../../data/data'
import styles from './Home.module.css'

function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4)

  return (
    <div className={styles.home}>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for opportunities
            </div>
            <h1 className={styles.heroTitle}>
              Hi, I'm <br />
              <span className={styles.heroName}>{profileData.name}</span>
            </h1>
            <div className={styles.heroRole}>
              <span className={styles.caret}>&gt;</span>
              <span className={styles.roleText}>{profileData.role}</span>
              <span className={styles.cursor}>_</span>
            </div>
            <p className={styles.heroBio}>{profileData.bio}</p>
            <div className={styles.heroActions}>
              <Link to="/project" className={`btn btn-primary ${styles.btnHero}`}>
                Lihat Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/contact" className={`btn btn-outline ${styles.btnHero}`}>
                Hubungi Saya
              </Link>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{projectsData.length}+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>{skillsData.length}+</span>
                <span className={styles.statLabel}>Skills</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>2</span>
                <span className={styles.statLabel}>Semester</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarRing} />
              <div className={styles.avatar}>
                {profileData.avatar
                  ? <img src={profileData.avatar} alt="Arif" className={styles.avatarImg} />
                  : <span className={styles.avatarInitial}>A</span>
                }
              </div>
              <div className={styles.floatTag1}>
                <span>⚡</span> React Dev
              </div>
              <div className={styles.floatTag2}>
                <span>🎯</span> SMA IT HSI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ME ===== */}
      <section id="about" className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="section-tag">👤 About Me</p>
            <h2 className="section-title">Tentang <span>Saya</span></h2>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutAvatar}>
              <div className={styles.aboutAvatarCircle}>
                {profileData.avatar
                  ? <img src={profileData.avatar} alt="Arif" className={styles.aboutAvatarImg} />
                  : <span className={styles.aboutAvatarInitial}>A</span>
                }
              </div>
              <div className={styles.aboutAvatarRing} />
              <div className={styles.aboutInfoCards}>
                <div className={styles.aboutInfoCard}>
                  <span>🎓</span>
                  <div>
                    <p className={styles.aboutInfoLabel}>Sekolah</p>
                    <p className={styles.aboutInfoVal}>SMA IT HSI</p>
                  </div>
                </div>
                <div className={styles.aboutInfoCard}>
                  <span>📖</span>
                  <div>
                    <p className={styles.aboutInfoLabel}>Jurusan</p>
                    <p className={styles.aboutInfoVal}>Tahfidz & IT</p>
                  </div>
                </div>
                <div className={styles.aboutInfoCard}>
                  <span>📍</span>
                  <div>
                    <p className={styles.aboutInfoLabel}>Lokasi</p>
                    <p className={styles.aboutInfoVal}>Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <h3 className={styles.aboutGreet}>Halo, Saya <span className={styles.aboutNameSpan}>Arif</span> 👋</h3>
              <p className={styles.aboutBio}>{profileData.bio}</p>
              <p className={styles.aboutBio}>
                Saya menempuh pendidikan di <strong>SMA IT HSI</strong> dengan program unggulan <strong>Tahfidz Al-Qur'an</strong> sekaligus jurusan <strong>IT</strong>. Saya percaya keseimbangan antara ilmu agama dan teknologi adalah bekal terbaik untuk masa depan.
              </p>
              <div className={styles.aboutHighlights}>
                <div className={styles.aboutHL}><span>🎯</span> Fokus pada Web Development</div>
                <div className={styles.aboutHL}><span>📚</span> Aktif belajar teknologi baru</div>
                <div className={styles.aboutHL}><span>🤝</span> Terbuka untuk kolaborasi</div>
                <div className={styles.aboutHL}><span>📖</span> Penghafal Al-Qur'an</div>
              </div>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: '28px', display: 'inline-flex' }}>
                Selengkapnya
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MY SKILLS ===== */}
      <section className={`section ${styles.skillsSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="section-tag">⚡ Skills</p>
            <h2 className="section-title">My <span>Skills</span></h2>
            <p className="section-desc">Teknologi dan tools yang saya kuasai dalam pengembangan proyek.</p>
          </div>
          <div className={styles.skillsGrid}>
            {skillsData.map(skill => (
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
          <div className={styles.viewAll}>
            <Link to="/about" className="btn btn-outline">
              Lihat Detail Skills
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className={`${styles.featured} section`}>
        <div className="container">
          <div className="section-header">
            <p className="section-tag">💼 Portfolio</p>
            <h2 className="section-title">Featured <span>Projects</span></h2>
            <p className="section-desc">Beberapa project terbaik yang sudah saya kerjakan selama Kelas XI</p>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map(project => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                  </div>
                  <span className={styles.cardBadge}>{project.semester}</span>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.cardTech}>
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={styles.techMore}>+{project.tech.length - 3}</span>
                  )}
                </div>
                <div className={styles.cardLinks}>
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className={styles.demoBtn}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link to="/project" className="btn btn-outline">
              Lihat Semua Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <div className={styles.ctaOrb} />
            <h2 className={styles.ctaTitle}>Mari Berkolaborasi! 🚀</h2>
            <p className={styles.ctaDesc}>
              Saya terbuka untuk kolaborasi, proyek freelance, atau sekadar ngobrol soal teknologi.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn btn-primary">Kirim Pesan</Link>
              <a href="https://github.com/arifkhairullah217-source" target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
