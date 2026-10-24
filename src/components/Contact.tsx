import { useRef, useState } from 'react'
import { ContactDetails } from './ContactDetails'
import './Contact.css'

export function Contact() {
  const nameInput = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="contact" id="iletisim" aria-labelledby="contact-heading">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="contact-label">İletişim</p>
          <h2 id="contact-heading">Bir sonraki projeyi<br />birlikte hayata geçirelim.</h2>
          <p className="contact-lead">Yeni bir proje, iş birliği veya teklif talebi için bizimle iletişime geçin.</p>
          <button className="contact-invitation" type="button" onClick={() => nameInput.current?.focus()}>
            Projenizi Konuşalım <span aria-hidden="true">↗</span>
          </button>
          <ContactDetails className="contact-details" />
        </div>

        <form className="contact-form" aria-label="Proje iletişim formu" aria-describedby="contact-form-note"
          onSubmit={event => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset() }}
          onInvalid={event => {
            const field = event.target
            if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
              field.setCustomValidity(field.validity.typeMismatch ? 'Lütfen geçerli bir e-posta adresi girin.' : 'Lütfen bu alanı doldurun.')
            }
          }}
          onInput={event => {
            const field = event.target
            if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) field.setCustomValidity('')
            setSubmitted(false)
          }}>
          <div className="contact-field">
            <label htmlFor="contact-name">Ad Soyad</label>
            <input ref={nameInput} id="contact-name" name="name" autoComplete="name" required maxLength={120} />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-phone">Telefon <span>(isteğe bağlı)</span></label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">E-posta</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-project">Proje Türü</label>
            <select id="contact-project" name="project" defaultValue="" required>
              <option value="" disabled>Proje türünü seçin</option>
              <option>Konut Projeleri</option>
              <option>Ticari Yapılar</option>
              <option>Anahtar Teslim Uygulama</option>
              <option>Proje ve Uygulama Yönetimi</option>
              <option>Diğer</option>
            </select>
          </div>
          <div className="contact-field contact-field--message">
            <label htmlFor="contact-message">Mesajınız</label>
            <textarea id="contact-message" name="message" rows={3} required maxLength={5000} />
          </div>
          <div className="contact-form-end">
            <p id="contact-form-note">Bu form önizleme amaçlıdır. Bilgileriniz gönderilmez.</p>
            <button className="contact-submit" type="submit">Gönder <span aria-hidden="true">→</span></button>
          </div>
          <p className="contact-status" role="status">{submitted ? 'Teşekkürler. Formunuz başarıyla tamamlandı. Bu önizlemede bilgileriniz gönderilmedi.' : ''}</p>
        </form>
      </div>
    </section>
  )
}
