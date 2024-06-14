

const NavBar = () => {


  return (
    <header>
      <aside id="tech">
        <img src="/html5.png" alt="" className="html_image" />
        <img src="/css3-alt.png" alt="" className="css_image" />
        <img src="/figma.png" alt="" className="figma_image" />
        <img src="/js.png" alt="" className="js_image" />
        <img src="/typescript.png" alt="" className="typescript_image" />
        <img className = "react_image" src="/react.png" alt="react.js" />
        <img src="/mysql.png" alt="" className="mysql_image" />
        <img src="/python.png" alt="" className="python_image" />
      </aside>
      <section className="title">
        <article className="name">
          <h1>Victor Daniel Mendez Torres</h1>
          <div className="front_end">
            <h3 className="border">FrontEnd Developer</h3>
            <h3 className="wave">FrontEnd Developer</h3>
          </div>
        </article>
        
        <article>
        <ul>
          <li>
            Physics Engineer with 4 years of experience in technology industry, 
            web developer, data analytics, quality assurance, customer support
            and frauds detection.
          </li>
          <li>
            Strong Mathematical and programming skills, 
            capable of adapting to new situations and proactive action. 
          </li>
          <li>
            Contribute to a great team with my experience and knowledge. 
          </li>
          <li>
            Ready for new challenges
          </li>
        </ul>
        </article>
        <button className="contact_button">
        <a href="https://github.com/wevader"
        target="_blank"
        rel="noreferrer">
          <img src="/github.png" alt="" className="github_image" />
        </a>
        <a 
        href="https://www.linkedin.com/in/victor-daniel-mendez-torres-4206a8111/"
        target="_blank"
        rel="noreferrer">
          <img src="/linkedin.png" alt="" className="linkedin_image" />
        </a>
        
        </button>
      </section>
      <section className="photo">
        <img src="/foto.jpg" alt="foto de perfil" />
      </section>
      
    </header>
  )
}

export default NavBar