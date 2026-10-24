import { ContactDetails } from './ContactDetails'
import './Footer.css'

const links = [
  ['Ana Sayfa', '#ana-sayfa'], ['Projeler', '#projeler'], ['Hakkımızda', '#hakkimizda'],
  ['Hizmetler', '#hizmetler'], ['İletişim', '#iletisim'],
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-identity">
            <a className="footer-brand" href="#ana-sayfa" aria-label="Temel İnşaat — Ana Sayfa">
              <svg width="32" height="36" viewBox="0 0 40 44" fill="none" aria-hidden="true">
                <path d="M3 40V14L20 3l17 11v26H26V20l-6-4-6 4v20H3Z" fill="currentColor" />
                <path d="M17 28h6v12h-6z" fill="var(--accent)" />
              </svg>
              <span>TEMEL İNŞAAT</span>
            </a>
            <p>Güçlü mühendislik. Doğru uygulama. Kalıcı yapılar.</p>
          </div>
          <ContactDetails className="footer-contact" />
        </div>
        <nav className="footer-navigation" aria-label="Alt menü">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <p className="footer-copyright">© 2026 Construction Studio. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
