import React, { useState, useEffect } from 'react'
import styles from './Contact.module.css'

const STORAGE_KEY = 'portofolio_guestbook'
const DRAFT_KEY   = 'portofolio_draft'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm]         = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]     = useState({})
  const [guestbook, setGuestbook] = useState([])
  const [activeTab, setActiveTab] = useState('form')

  /* Load draft & guestbook from localStorage on mount */
  useEffect(() => {
    const draft = localStorage.getItem(DRAFT_KEY)
    if (draft) {
      try { setForm(JSON.parse(draft)) } catch {}
    }
    const book = localStorage.getItem(STORAGE_KEY)
    if (book) {
      try { setGuestbook(JSON.parse(book)) } catch {}
    }
  }, [])

  /* Auto-save draft to localStorage on every form change */
  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(form))
  }, [form])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim())    newErrors.name    = 'Nama tidak boleh kosong'
    if (!form.email.trim())   newErrors.email   = 'Email tidak boleh kosong'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Format email tidak valid'
    if (!form.message.trim()) newErrors.message = 'Pesan tidak boleh kosong'
    else if (form.message.trim().length < 10)
      newErrors.message = 'Pesan minimal 10 karakter'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    /* Save to guestbook in localStorage */
    const entry = {
      id:        Date.now(),
      name:      form.name.trim(),
      email:     form.email.trim(),
      message:   form.message.trim(),
      timestamp: new Date().toLocaleString('id-ID'),
    }
    const updatedBook = [entry, ...guestbook]
    setGuestbook(updatedBook)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBook))

    /* Clear draft */
    localStorage.removeItem(DRAFT_KEY)
    setForm(initialForm)
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleDeleteEntry = (id) => {
    const updated = guestbook.filter(g => g.id !== id)
    setGuestbook(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return (
    <div className={styles.contactPage}>
      {/* ===== PAGE HERO ===== */}
      <section className={styles.pageHero}>
        <div className={styles.heroBg} />
        <div className="container">
          <p className="section-tag">📬 Contact</p>
          <h1 className={styles.pageTitle}>
            Mari <span>Terhubung!</span>
          </h1>
          <p className={styles.pageDesc}>
            Punya pertanyaan, ide kolaborasi, atau sekadar ingin say hello? Tinggalkan pesan di sini!
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.layout}>

            {/* ---- LEFT: Contact Info ---- */}
            <div className={styles.infoSide}>
              <h2 className={styles.infoTitle}>Info Kontak</h2>
              <p className={styles.infoDesc}>
                Saya selalu terbuka untuk diskusi, kolaborasi proyek, atau pertanyaan seputar web development.
              </p>

              <div className={styles.contactCards}>
                <div className={styles.contactCard}>
                  <div className={styles.ccIcon} style={{ background: 'rgba(108,99,255,0.12)', color: '#6C63FF' }}>
                    ✉️
                  </div>
                  <div>
                    <p className={styles.ccLabel}>Email</p>
                    <a href="mailto:arifstwn@gmail.com" className={styles.ccValue}>arifstwn@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.ccIcon} style={{ background: 'rgba(67,233,123,0.12)', color: '#43E97B' }}>
                    📍
                  </div>
                  <div>
                    <p className={styles.ccLabel}>Lokasi</p>
                    <p className={styles.ccValue}>Indonesia</p>
                  </div>
                </div>
                <div className={styles.contactCard}>
                  <div className={styles.ccIcon} style={{ background: 'rgba(255,101,132,0.12)', color: '#FF6584' }}>
                    🎓
                  </div>
                  <div>
                    <p className={styles.ccLabel}>Status</p>
                    <p className={styles.ccValue}>Siswa SMK — Aktif</p>
                  </div>
                </div>
              </div>

              <div className={styles.socialSection}>
                <p className={styles.socialTitle}>Temukan Saya di:</p>
                <div className={styles.socialBtns}>
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

              {/* Guestbook count */}
              {guestbook.length > 0 && (
                <div className={styles.bookCount}>
                  <span className={styles.bookDot} />
                  {guestbook.length} pesan di Guestbook
                </div>
              )}
            </div>

            {/* ---- RIGHT: Form + Guestbook ---- */}
            <div className={styles.formSide}>
              {/* Tabs */}
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === 'form' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('form')}
                >
                  ✉️ Kirim Pesan
                </button>
                <button
                  className={`${styles.tab} ${activeTab === 'guestbook' ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab('guestbook')}
                >
                  📖 Guestbook {guestbook.length > 0 && <span className={styles.tabBadge}>{guestbook.length}</span>}
                </button>
              </div>

              {/* ---- FORM TAB ---- */}
              {activeTab === 'form' && (
                <div className={styles.formCard}>
                  {submitted && (
                    <div className={styles.successBanner}>
                      <span>🎉</span>
                      <div>
                        <p className={styles.successTitle}>Pesan Terkirim!</p>
                        <p className={styles.successDesc}>Terima kasih! Pesan kamu sudah tersimpan di Guestbook.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="name">
                        Nama <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Masukkan nama kamu"
                        value={form.name}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        autoComplete="name"
                      />
                      {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="email">
                        Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="contoh@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        autoComplete="email"
                      />
                      {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="message">
                        Pesan <span className={styles.required}>*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tulis pesanmu di sini..."
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      />
                      <div className={styles.charCount}>
                        {form.message.length} karakter
                      </div>
                      {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}
                    </div>

                    <div className={styles.draftNote}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                        <polyline points="17,21 17,13 7,13 7,21"/><polyline points="7,3 7,8 15,8"/>
                      </svg>
                      Draft otomatis tersimpan di browser
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Kirim Pesan
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </button>
                  </form>
                </div>
              )}

              {/* ---- GUESTBOOK TAB ---- */}
              {activeTab === 'guestbook' && (
                <div className={styles.guestbookSection}>
                  {guestbook.length === 0 ? (
                    <div className={styles.emptyBook}>
                      <span className={styles.emptyIcon}>📭</span>
                      <p className={styles.emptyTitle}>Belum ada pesan</p>
                      <p className={styles.emptyDesc}>Jadilah yang pertama meninggalkan pesan!</p>
                      <button className={styles.goFormBtn} onClick={() => setActiveTab('form')}>
                        Tulis Pesan →
                      </button>
                    </div>
                  ) : (
                    <div className={styles.guestList}>
                      {guestbook.map(entry => (
                        <div key={entry.id} className={styles.guestCard}>
                          <div className={styles.guestHeader}>
                            <div className={styles.guestAvatar}>
                              {entry.name.charAt(0).toUpperCase()}
                            </div>
                            <div className={styles.guestMeta}>
                              <p className={styles.guestName}>{entry.name}</p>
                              <p className={styles.guestTime}>{entry.timestamp}</p>
                            </div>
                            <button
                              className={styles.deleteBtn}
                              onClick={() => handleDeleteEntry(entry.id)}
                              title="Hapus pesan"
                              aria-label="Hapus pesan"
                            >
                              ✕
                            </button>
                          </div>
                          <p className={styles.guestMessage}>{entry.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
