
import { useEffect } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "YonoDiwaGames",
    type: "Gaming directory",
    description:
      "A gaming website project focused on organizing games and referral links in a clean, accessible interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://yonodiwagames.online",
    code: "",
  },
  {
    number: "02",
    name: "School Website",
    type: "Education",
    description:
      "A school website concept for presenting academic information, results, and school updates.",
    stack: ["React", "CSS", "Responsive UI"],
    live: "",
    code: "",
  },
  {
    number: "03",
    name: "Creative Experiments",
    type: "Web experiments",
    description:
      "Small interactive websites and interface experiments created while learning and exploring web development.",
    stack: ["JavaScript", "React", "CSS"],
    live: "",
    code: "",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git & GitHub",
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home" aria-label="Sagar home">
            S<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a className="nav-contact" href="#contact">
              Contact <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            
<p className="eyebrow">
  <span className="status-dot" />
  STUDENT · WEB DEVELOPER
</p>

<h1>
  Hi, I'm Sagar Rajput.
  <br />
  <span>I build for the web.</span>
</h1>

<p className="hero-description">
  I'm Sagar Rajput, a student and web developer interested
  in building useful websites, exploring technology, and
  turning creative ideas into digital experiences.
</p>


            <h1>
              Building digital things,
              <br />
              <span>one idea at a time.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm Sagar. I build websites, explore technology,
              and turn ideas into useful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <span>↗</span>
              </a>
              <a className="text-link" href="#contact">
                Let's connect <span>→</span>
              </a>
            </div>

            <div className="hero-bottom">
              <span>BASED IN INDIA</span>
              <span>LEARNING BY BUILDING</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-center">
              <span>SR</span>
              <span className="art-period">.</span>
            </div>
            <span className="art-label label-top">DESIGN</span>
            <span className="art-label label-bottom">DEVELOP</span>
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">A FEW THINGS I'VE BUILT</p>
                <h2>Selected work<span>.</span></h2>
              </div>
              <p className="heading-note">
                Projects, experiments, and ideas
                <br />
                brought to the web.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  className="project-card reveal"
                  key={project.number}
                >
                  <div className="project-top">
                    <span className="project-number">
                      {project.number} / 03
                    </span>
                    <span className="project-arrow">↗</span>
                  </div>

                  <div className="project-visual" aria-hidden="true">
                    <span className="visual-mark">
                      {project.number === "01"
                        ? "YD."
                        : project.number === "02"
                        ? "ED."
                        : "{ }"}
                    </span>
                    <span className="visual-caption">
                      {project.type.toUpperCase()}
                    </span>
                  </div>

                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tag-list">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live website ↗
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source code ↗
                      </a>
                    )}
                    {!project.live && !project.code && (
                      <span className="coming-soon">
                        Project details coming soon
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-layout reveal">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>Curious mind.<br />Practical approach.</h2>
            </div>
            <div className="about-copy">
              <p>
                I'm a student interested in web development and technology.
                I enjoy learning how websites work and using code to turn
                ideas into real projects.
              </p>
              <p>
                I'm still learning, experimenting, and improving with
                every build. This portfolio is a place to document that
                journey and share what I create.
              </p>
              <a className="text-link" href="#contact">
                Have a project in mind? <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="skills-section section" id="skills">
          <div className="container reveal">
            <p className="eyebrow">TOOLS OF THE TRADE</p>
            <div className="section-heading skills-heading">
              <h2>Skills & technologies<span>.</span></h2>
              <p className="heading-note">
                Growing my toolkit, one project at a time.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-index">
                    0{index + 1}
                  </span>
                  <span>{skill}</span>
                  <span className="skill-symbol">↗</span>
                </div>
              ))}
            </div>
            <p className="skills-note">
              Update this list to reflect the technologies you can
              confidently use.
            </p>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container contact-box reveal">
            <p className="eyebrow">HAVE AN IDEA?</p>
            <h2>Let's make something<br />meaningful<span>.</span></h2>
            <p>
              Interested in a website, a collaboration, or just
              talking about technology? Feel free to reach out.
            </p>
            
<a
  className="button button-light"
  href="mailto:sagarrajput8470@gmail.com?subject=Portfolio%20Inquiry"
>
  Send me an email <span>↗</span>
</a>

          </div>
        </section>
      </main>

      <footer className="footer">
        
<div className="container footer-inner">
  <a className="logo" href="#home">SR<span>.</span></a>
  <p>Student & Web Developer · Building and learning.</p>

  <div className="footer-socials">
    <a
      href="https://www.instagram.com/sagar_rajput_2678/"
      target="_blank"
      rel="noreferrer"
    >
      Instagram ↗
    </a>
    <a href="#home" className="back-top">
      Back to top ↑
    </a>
  </div>
</div>

        <div className="container copyright">
          © {new Date().getFullYear()} Sagar. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
