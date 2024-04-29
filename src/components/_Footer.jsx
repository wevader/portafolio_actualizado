

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
                <a href="tel:+546142241798">
                  <img src="/whatsapp.png" alt="whatsapp" className="whatsapp_image" />
                </a>
                <a href="mailto:wevader1986@gmail.com">
                  <img src="/sobre.png" alt="email" className="email_image"/>
                </a> 
              </section>
            </fieldset>
      </section>

    </footer>
  )
}

export default Footer
