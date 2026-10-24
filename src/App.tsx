import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ConstructionProcess } from './components/ConstructionProcess'
import { Projects } from './components/Projects'

export default function App() {
  const [notice, setNotice] = useState('')
  const previewSection = (label: string) => {
    if (label === 'Projeler') document.getElementById('projeler')?.scrollIntoView()
    else setNotice(`${label} bölümü yakında burada.`)
  }
  return <>
    <a className="skip-link" href="#ana-sayfa">İçeriğe geç</a>
    <Navbar onNavigate={previewSection} />
    <main><Hero onExplore={() => previewSection('Projeler')} /><ConstructionProcess /><Projects onInspect={name => setNotice(`${name} proje detayları hazırlanıyor.`)} /></main>
    {notice && <div className="phase-notice" role="status"><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Bildirimi kapat">×</button></div>}
  </>
}
