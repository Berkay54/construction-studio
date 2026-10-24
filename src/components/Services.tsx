import { useRef, useState } from 'react'
import './Services.css'

const services = [
  { title: 'Konut Projeleri', description: 'Modern, işlevsel ve yaşama odaklı konut çözümleri.', image: '/images/hizmet-konut-projeleri.jpg', alt: 'Yeşil avlu ve su öğesi çevresinde balkonlu konutlar.', position: '45% 50%' },
  { title: 'Ticari Yapılar', description: 'Marka değerini ve kullanıcı deneyimini güçlendiren yapılar.', image: '/images/hizmet-ticari-yapilar.jpg', alt: 'İskeleler, vinç ve çalışanlarla yapım aşamasındaki binalar.', position: '50% 50%' },
  { title: 'Anahtar Teslim Uygulama', description: 'Tüm süreci tek merkezden planlayıp uyguluyoruz.', image: '/images/hizmet-anahtar-teslim.jpg', alt: 'Cam cepheli binalar, ticari alanlar ve tamamlanmış peyzaj düzenlemesi.', position: '40% 50%' },
  { title: 'Proje ve Uygulama Yönetimi', description: 'Zaman, bütçe ve kaliteyi kontrollü biçimde yönetiyoruz.', image: '/images/hizmet-proje-uygulama-yonetimi.jpg', alt: 'Şantiyede proje çizimlerini birlikte değerlendiren baretli üç uzman.', position: '30% 65%' },
]

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const requestedService = useRef(0)
  const readyImages = useRef(new Set<number>())
  const selectService = (index: number) => {
    requestedService.current = index
    if (readyImages.current.has(index)) setActiveService(index)
  }

  return (
    <section className="services" id="hizmetler" aria-labelledby="services-heading">
      <div className="services-inner">
        <header className="services-heading">
          <h2 id="services-heading">Hizmetlerimiz</h2>
          <p>Fikir aşamasından anahtar teslim uygulamaya kadar, yapı üretiminin her adımında bütüncül çözümler sunuyoruz.</p>
        </header>

        <div className="services-composition">
          <figure className="services-visual" id="services-visual" aria-labelledby="services-visual-caption">
            <div className="services-image-stack">
              {services.map((service, index) => (
                <img key={service.title} className={index === activeService ? 'is-active' : undefined}
                  src={service.image} alt={service.alt} aria-hidden={index !== activeService}
                  width="1448" height="1086" style={{ objectPosition: service.position }}
                  loading="lazy" decoding="async"
                  onLoad={async event => {
                    const image = event.currentTarget
                    try { await image.decode() } catch { return }
                    readyImages.current.add(index)
                    if (requestedService.current === index) setActiveService(index)
                  }} />
              ))}
            </div>
            <figcaption id="services-visual-caption">
              <span>{services[activeService].title}</span>
              <span className="services-image-note">Temsili görsel</span>
            </figcaption>
          </figure>

          <ul className="services-list">
            {services.map((service, index) => (
              <li key={service.title}>
                <button className={`service-row${index === activeService ? ' is-active' : ''}`}
                  type="button" aria-pressed={index === activeService} aria-controls="services-visual"
                  onPointerEnter={event => { if (event.pointerType === 'mouse') selectService(index) }}
                  onFocus={() => selectService(index)} onClick={() => selectService(index)}>
                  <span className="service-name">{service.title}</span>
                  <span className="service-description">{service.description}</span>
                  <svg className="service-direction" width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M4 14h19m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
