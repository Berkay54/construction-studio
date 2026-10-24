import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
const links = ['Ana Sayfa', 'Projeler', 'Hakkımızda', 'Hizmetler', 'İletişim']
export function Navbar({ onNavigate }: { onNavigate: (label: string) => void }) {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [open])
  return <header className="site-header">
    <a className="brand" href="#ana-sayfa" aria-label="Temel İnşaat — Ana Sayfa" onClick={() => setOpen(false)}>
      <svg className="brand-mark" viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M3 40V14L20 3l17 11v26H26V20l-6-4-6 4v20H3Z" fill="currentColor" /><path d="M17 28h6v12h-6z" fill="#b94f30" /></svg>
      <span className="brand-name">TEMEL<span>İNŞAAT</span></span>
    </a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Kapat' : 'Menü'}<span className={open ? 'menu-icon is-open' : 'menu-icon'} aria-hidden="true"><i /><i /></span></button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Ana menü">
      {links.map((label, index) => <a key={label} href={index === 0 ? '#ana-sayfa' : `#${['', 'projeler', 'hakkimizda', 'hizmetler', 'iletisim'][index]}`} aria-current={index === 0 ? 'page' : undefined}
        onClick={(event) => { setOpen(false); if (index !== 0) { event.preventDefault(); onNavigate(label) } }}>{label}{index === 4 && <span aria-hidden="true">↗</span>}</a>)}
    </nav>
  </header>
}
