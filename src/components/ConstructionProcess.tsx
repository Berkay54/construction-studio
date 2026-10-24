import { useEffect, useRef, useState } from 'react'
import './ConstructionProcess.css'

const stages = [
  { title: 'Planlama', description: 'İhtiyaçları anlıyor, her ayrıntıyı özenle planlıyoruz.' },
  { title: 'Mühendislik', description: 'Sağlam temelleri doğru hesaplarla oluşturuyoruz.' },
  { title: 'Uygulama', description: 'Projeyi, sahada titizlikle gerçeğe dönüştürüyoruz.' },
  { title: 'Teslim', description: 'Her detayı kontrol ediyor, yaşamınıza hazır sunuyoruz.' },
]

export function ConstructionProcess() {
  const section = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const element = section.current
    const player = video.current
    if (!element || !player) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    const updatePlayback = () => {
      if (visible && !motion.matches && !userPaused.current && !document.hidden) {
        void player.play().catch(() => setPlaying(false))
      } else player.pause()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) element.classList.add('is-visible')
      updatePlayback()
    }, { threshold: 0.1 })
    observer.observe(element)
    motion.addEventListener('change', updatePlayback)
    document.addEventListener('visibilitychange', updatePlayback)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', updatePlayback)
      document.removeEventListener('visibilitychange', updatePlayback)
    }
  }, [])

  return <section ref={section} className="construction-process" aria-labelledby="process-heading">
    <div className="process-layout">
      <div className="process-intro">
        <h2 id="process-heading">BİR YAPI NASIL<br />HAYATA GEÇER?</h2>
        <p>Her proje; doğru planlama, güçlü mühendislik ve kusursuz uygulamanın birleşimidir.</p>
      </div>
      <div className="process-film">
        <video ref={video} autoPlay muted loop playsInline preload="metadata" poster="/video/structure-poster.jpg" aria-label="Betonarme bir yapının inşa süreci" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
          <source src="/video/structure-assembly.mp4" type="video/mp4" />
        </video>
        <button className="process-playback" aria-label={playing ? 'Yapı videosunu duraklat' : 'Yapı videosunu oynat'} onClick={() => {
          const player = video.current
          if (!player) return
          if (player.paused) { userPaused.current = false; void player.play().catch(() => setPlaying(false)) }
          else { userPaused.current = true; player.pause() }
        }}>
          {playing ? <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M7 4v12M13 4v12" stroke="currentColor" strokeWidth="2" /></svg> : <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="m6 3 10 7-10 7Z" fill="currentColor" /></svg>}
        </button>
      </div>
      <ol className="process-stages" aria-label="Projenin hayata geçiş aşamaları">
        {stages.map(stage => <li key={stage.title}>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </li>)}
      </ol>
    </div>
  </section>
}
