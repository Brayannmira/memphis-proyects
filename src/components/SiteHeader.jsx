import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navigation } from '../data/clinicData.js'

function MedicalCross({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" />
    </svg>
  )
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Link className="brand" to="/#inicio" onClick={closeMenu}>
        <span className="brand-mark">
          <MedicalCross />
        </span>
        <span className="brand-name">
          VITA<span>+</span>
        </span>
      </Link>

      <nav
        id="primary-navigation"
        className={`primary-navigation ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navigation.map((item) => (
          <Link
            key={item.id}
            className={`nav-chip ${item.tone}`}
            to={`/#${item.id}`}
            onClick={closeMenu}
          >
            {item.number} {item.label}
          </Link>
        ))}
      </nav>

      <Link className="urgent-button" to="/#cita" onClick={closeMenu}>
        <span className="status-dot" aria-hidden="true" />
        Urgencias 24H
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default SiteHeader
