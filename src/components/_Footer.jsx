

const Footer = () => {
  return (
    <footer id="form">
      <section id="education">
        <span>Education:</span>
        <span>Engineering Physics - Universidad Autónoma de San Luís Potosí</span>
        <span>FrontEnd Developer - CoderHouse</span>
        <span>Data Analist - Udemy</span>
      </section>
      
      <section className="contact">
            <fieldset >
              <legend>Contact Me</legend>
              <section className="contact_imagens">
                <a href="tel:+526142241798" target="_blank">
                  <img src="/llamada-telefonica.png" alt="llamada" className="llamada_image" />
                </a>
                <a href="mailto:wevader1986@gmail.com" target="_blank">
                  <img src="/sobre.png" alt="email" className="email_image"/>
                </a> 
                <a href="http://wa.me/+526142241798 " target="_blank">
                  <img src="/whatsapp.png" alt="whatsapp" className="whatsapp_image" />
                </a>
              </section>
            </fieldset>
      </section>

    </footer>
  )
}

export default Footer
