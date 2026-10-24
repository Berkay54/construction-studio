import { useEffect, useRef, useState } from 'react'
import './Hero.css'
export function Hero({ onExplore }: { onExplore: () => void }) {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyPreference = () => { if (preference.matches) video.current?.pause() }
    applyPreference()
    preference.addEventListener('change', applyPreference)
    return () => preference.removeEventListener('change', applyPreference)
  }, [])
  return <section className="hero" id="ana-sayfa" aria-labelledby="hero-heading">
    <video ref={video} className="hero-video" autoPlay muted playsInline loop preload="metadata" poster="/video/hero-poster.jpg" aria-hidden="true" onPlay={() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !video.current?.dataset.userPlayed) video.current?.pause()
      else setPlaying(true)
    }} onPause={() => setPlaying(false)}><source src="/video/hero-construction-journey.mp4" type="video/mp4" /></video>
    <div className="hero-shade" />
    <div className="hero-content">
      <h1 id="hero-heading">YAŞAM İÇİN<br />İNŞA EDİYORUZ.</h1>
      <p>Geleceğin yaşam alanlarını, sağlam mühendislik ve çağdaş mimariyle hayata geçiriyoruz.</p>
      <a className="hero-cta" href="#projeler" onClick={(event) => { event.preventDefault(); onExplore() }}>Projelerimizi İncele<svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" /></svg></a>
    </div>
    <button className="video-control" aria-label={playing ? 'Arka plan videosunu duraklat' : 'Arka plan videosunu oynat'} onClick={() => {
      if (video.current?.paused) { video.current.dataset.userPlayed = 'true'; void video.current.play().catch(() => setPlaying(false)) }
      else video.current?.pause()
    }}>{playing ? <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3v10M11 3v10" stroke="currentColor" strokeWidth="2" /></svg> : <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 8 5-8 5Z" fill="currentColor" /></svg>}</button>
  </section>
}
