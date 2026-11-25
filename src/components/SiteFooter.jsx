import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="footer-square" aria-hidden="true" />
        <span>VITA+ Centro Médico</span>
      </div>
      <div className="footer-details">
        <span className="footer-urgent">● Urgencias 24H</span>
        <span className="footer-address">● Av. Central 420</span>
      </div>
      <Link className="back-to-top" to="/#inicio">
        ↑ Subir
      </Link>
    </footer>
  )
}

export default SiteFooter
