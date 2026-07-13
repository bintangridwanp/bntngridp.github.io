import { Link } from 'react-router-dom';
import Lanyard from '../components/Lanyard';

function About() {
  return (
    <main className="page-content">
      {/* ===== Hero Section ===== */}
      <section className="hero" id="home">
        <div className="hero-wrapper">
          <div className="hero-text" data-aos="fade-right">
            <h1>I Build <span>Scalable & Robust</span> Fullstack Web Apps</h1>
            <p>
              I'm Bintang Ridwan Pribadi, a Software Engineering student and Fullstack Developer. I specialize in building complete, end-to-end web applications—from designing responsive user interfaces to crafting robust backend APIs and managing optimized databases.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn">Get In Touch</a>
              <Link to="/portfolio" className="view-work">
                Explore Work <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>

          <div className="hero-img" data-aos="zoom-in">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              fov={16}
              frontImage="/img/index/profile.jpeg"
              backImage="/img/general/logo.png"
              imageFit="cover"
            />
          </div>
        </div>
      </section>

      {/* ===== Skills Section ===== */}
      <section className="services" id="services">
        <div className="center-text" data-aos="fade-down">
          <h2>Technical <span>Skills</span></h2>
          <p style={{ color: 'var(--other-color)', marginTop: '10px' }}>
            Core technologies powering my backend architecture
          </p>
        </div>

        <div className="skills-container" data-aos="fade-up">
          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-code-box-line"></i></div>
            <div className="skill-info">
              <h4>PHP & Laravel</h4>
              <p>Expert in RESTful APIs</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-nodejs-line"></i></div>
            <div className="skill-info">
              <h4>Node JS</h4>
              <p>Server-side JavaScript</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-command-line"></i></div>
            <div className="skill-info">
              <h4>Golang</h4>
              <p>High Performance Systems</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-database-2-line"></i></div>
            <div className="skill-info">
              <h4>MySQL</h4>
              <p>Database Optimization</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-html5-line"></i></div>
            <div className="skill-info">
              <h4>HTML & CSS</h4>
              <p>Web Foundation</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-braces-line"></i></div>
            <div className="skill-info">
              <h4>JavaScript</h4>
              <p>Dynamic Interactivity</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-git-branch-line"></i></div>
            <div className="skill-info">
              <h4>Git & GitHub</h4>
              <p>Version Control Expert</p>
            </div>
          </div>

          <div className="skill-card-rect">
            <div className="skill-icon"><i className="ri-terminal-box-line"></i></div>
            <div className="skill-info">
              <h4>Postman</h4>
              <p>API Testing & Docs</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" data-aos="fade-up"></div>

      {/* ===== Contact Section ===== */}
      <section className="contact" id="contact">
        <div className="contact-container" data-aos="fade-right">
          <h2>Contact</h2>
          <p>
            I'm currently looking to join a cross-functional team that values improving people's lives through accessible backend systems. Or have a project in mind? Let's connect.
          </p>

          <a href="mailto:bintangridwan30@gmail.com" className="contact-email">
            bintangridwan30@gmail.com
          </a>

          <div className="social-links-minimal">
            <a href="https://instagram.com/bntngridp" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://github.com/bntngridp" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/bntngridp/" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://x.com/bntngridp" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="https://www.facebook.com/bntngridp/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="ri-facebook-box-fill"></i>
            </a>
            <a href="https://medium.com/@bntngridp" target="_blank" rel="noopener noreferrer" title="Medium">
              <i className="ri-medium-line"></i>
            </a>
            <a href="mailto:bintangridwan30@gmail.com" title="Send Email">
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
