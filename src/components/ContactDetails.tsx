export function ContactDetails({ className }: { className: string }) {
  return (
    <address className={className}>
      <div><span>Telefon</span><a href="tel:+902640000000">+90 264 000 00 00</a></div>
      <div><span>E-posta</span><a href="mailto:info@constructionstudio.com">info@constructionstudio.com</a></div>
      <div><span>Adres</span><p>Sakarya, Türkiye</p></div>
    </address>
  )
}
