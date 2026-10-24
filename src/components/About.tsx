import './About.css'

export function About() {
  return (
    <section className="about" id="hakkimizda" aria-labelledby="about-heading">
      <div className="about-layout">
        <p className="about-label">Hakkımızda</p>
        <h2 id="about-heading">Yalnızca yapı değil,<br />yaşam alanları üretiyoruz.</h2>

        <figure className="about-visual">
          <img
            src="/images/hakkimizda.jpg"
            width="1536"
            height="1024"
            alt="Baretli iki inşaat uzmanı, proje çizimleri başında gün batımında şantiyeyi değerlendiriyor."
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="about-copy">
          <p>Her projeye; bulunduğu çevreyi, kullanıcı ihtiyaçlarını ve uzun vadeli değeri birlikte düşünerek yaklaşıyoruz.</p>
          <p>Mimari kararları güçlü mühendislik, doğru malzeme seçimi ve titiz uygulamayla bir araya getiriyor; zamana karşı değerini koruyan yapılar ortaya çıkarıyoruz.</p>
        </div>

        <div className="about-statement">
          <p>Bizim için iyi bir proje, yalnızca tamamlandığında değil, yıllar sonra da doğru hissettirmelidir.</p>
        </div>
      </div>
    </section>
  )
}
