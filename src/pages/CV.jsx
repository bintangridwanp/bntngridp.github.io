function CV() {
  return (
    <main className="cv-container">
      {/* ===== Sidebar ===== */}
      <aside className="cv-sidebar" data-aos="fade-right">
        <ul>
          <li><a href="#basics">Basics</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#organizations">Organizations</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#languages">Languages</a></li>
        </ul>
      </aside>

      {/* ===== Content ===== */}
      <div className="cv-content" data-aos="fade-up">
        <div className="cv-header">
          <div>
            <h1>CV</h1>
            <p>Back End Developer • Software Engineering Student</p>
          </div>
          <div className="pdf-icon">
            <a href="/img/cv/CV_Bintang%20Ridwan%20Pribadi.pdf" download="CV_Bintang_Ridwan_Pribadi.pdf" title="Download CV as PDF">
              <i className="ri-file-pdf-2-fill"></i>
            </a>
          </div>
        </div>

        {/* Section: Basics */}
        <section className="cv-section" id="basics">
          <h2>Basics</h2>
          <div className="basics-grid">
            <span>Name</span> <span>Bintang Ridwan Pribadi</span>
            <span>Label</span> <span>Backend Developer</span>
            <span>Phone</span> <span>+62 8157-5971-998</span>
            <span>Email</span> <span>bintangridwan30@gmail.com</span>
            <span>Url</span> <span>https://bntngridp.github.io/</span>
            <span>Summary</span> <span>Third-year Software Engineering student at Telkom University, specializing in Back End Development. Enthusiastic and experienced in working on various projects, especially in backend system development. Proficient in programming languages and frameworks such as PHP, Go, and Node.js. Able to solve problems effectively, think critically, and create innovative backend solutions. Strong communication skills and solid time management ensure timely project completion and optimal team collaboration.</span>
          </div>
        </section>

        {/* Section: Experience */}
        <section className="cv-section" id="work">
          <h2>Experience</h2>
          
          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-title">Backend Developer Intern</span>
              <span className="timeline-date">Jun 2025 - Nov 2025</span>
            </div>
            <span className="timeline-subtitle">Advanced Software Engineering Laboratory - Telkom University</span>
            <ul className="timeline-content">
              <li>Designed and developed RESTful APIs to support core application features.</li>
              <li>Implemented and maintained backend services, ensuring performance, security, and scalability.</li>
              <li>Created clear and well-structured API documentation to support front-end integration and team collaboration.</li>
              <li>Collaborated with front-end and UI/UX teams to ensure seamless data exchange and system integration.</li>
              <li>Optimized database queries and backend logic to improve response time and system efficiency.</li>
              <li>Integrated Optical Character Recognition (OCR) technology to extract and process text data from images, improving automation and data accuracy.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-title">C-Learn of Backend Division</span>
              <span className="timeline-date">Nov 2024 - Dec 2025</span>
            </div>
            <span className="timeline-subtitle">Chevalier Laboratory SAS - Telkom University</span>
            <ul className="timeline-content">
              <li>Participated in a backend-focused development program within a collaborative and innovation-driven community.</li>
              <li>Completed 12+ structured learning sessions (offline & online) covering backend systems and web development practices.</li>
              <li>Contributed to team-based development of a large-scale project, building a product from initial concept to deployment-ready.</li>
              <li>Solved real-world case studies and assignments to strengthen analytical thinking and backend development skills.</li>
              <li>Actively engaged in seminars and technical events to expand both hard and soft skills.</li>
              <li>Collaborated in a team environment, improving communication, teamwork, and project execution.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-title">NetSchool 2024</span>
              <span className="timeline-date">Nov 2024 - Dec 2025</span>
            </div>
            <span className="timeline-subtitle">Adaptive Network - Telkom University</span>
            <ul className="timeline-content">
              <li>Participated in network fundamentals and infrastructure study programs.</li>
              <li>Hands-on configuration of servers and clean API communication protocols.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-title">Web Development Division</span>
              <span className="timeline-date">Nov 2023 - Dec 2024</span>
            </div>
            <span className="timeline-subtitle">Central Computer Improvement - Telkom University</span>
            <ul className="timeline-content">
              <li>Participated in a backend-focused development program within a collaborative and innovation-driven community.</li>
              <li>Completed 12+ structured learning sessions (offline & online) covering backend systems and web development practices.</li>
              <li>Contributed to team-based development of a large-scale project, building a product from initial concept to deployment-ready.</li>
              <li>Solved real-world case studies and assignments to strengthen analytical thinking and backend development skills.</li>
              <li>Actively engaged in seminars and technical events to expand both hard and soft skills.</li>
              <li>Collaborated in a team environment, improving communication, teamwork, and project execution.</li>
            </ul>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-title">Google Developer Student Club - Telkom University</span>
              <span className="timeline-date">Dec 2023 - Oct 2024</span>
            </div>
            <span className="timeline-subtitle">Mobile & Web Development Student</span>
            <ul className="timeline-content">
              <li>Participated in a backend-focused development program within a collaborative and innovation-driven community.</li>
              <li>Completed 12+ structured learning sessions (offline & online) covering backend systems and web development practices.</li>
              <li>Contributed to team-based development of a large-scale project, building a product from initial concept to deployment-ready.</li>
              <li>Solved real-world case studies and assignments to strengthen analytical thinking and backend development skills.</li>
              <li>Actively engaged in seminars and technical events to expand both hard and soft skills.</li>
              <li>Collaborated in a team environment, improving communication, teamwork, and project execution.</li>
            </ul>
          </div>
        </section>

        {/* Section: Education */}
        <section className="cv-section" id="education">
          <h2>Education</h2>
          <div className="timeline-item">
            <div className="timeline-header">
              <span className="timeline-title">Software Engineering Technology (S.Tr.Kom)</span>
              <span className="timeline-date">Sept 2023 - Present</span>
            </div>
            <span className="timeline-subtitle">Telkom University, Bandung</span>
            <p className="timeline-content" style={{ marginTop: '10px' }}>
              GPA: 3.46/4.00. Strong foundation in Data Structures, Algorithms, and Database Modeling. Experienced in SDLC and Agile methodologies (Scrum).
            </p>
          </div>
        </section>

        {/* Section: Organizations */}
        <section className="cv-section" id="organizations">
          <h2>Organizations</h2>
          <div className="timeline-item">
            <span className="timeline-title" style={{ fontWeight: '600' }}>Advanced Software Engineering Laboratory (CCI)</span>
            <span className="timeline-subtitle">Backend Developer Intern (Jun 2025 - Nov 2025)</span>
            <p className="timeline-content" style={{ marginTop: '5px' }}>Participated in weekly study groups and built products from scratch to deployment-ready within 5 months.</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-title" style={{ fontWeight: '600' }}>Chevalier Laboratory SAS</span>
            <span className="timeline-subtitle">C-Learn of Backend Division (Nov 2024 - Dec 2025)</span>
            <p className="timeline-content" style={{ marginTop: '5px' }}>Participated in backend-focused development, completed 12+ structured learning sessions, and contributed to large-scale project development.</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-title" style={{ fontWeight: '600' }}>Google Developer Student Club (GDSC)</span>
            <span className="timeline-subtitle">Mobile & Web Development Student (Dec 2023 - Oct 2024)</span>
            <p className="timeline-content" style={{ marginTop: '5px' }}>Collaborated as a Hustler in "Thrift Cycle" mobile platform development at HackFest 2024 using Design Thinking.</p>
          </div>
          <div className="timeline-item">
            <span className="timeline-title" style={{ fontWeight: '600' }}>Central Computer Improvement (CCI)</span>
            <span className="timeline-subtitle">Web Development Division (Nov 2023 - Dec 2024)</span>
            <p className="timeline-content" style={{ marginTop: '5px' }}>Participated in weekly study groups and built products from scratch to deployment-ready within 5 months.</p>
          </div>
        </section>

        {/* Section: Skills */}
        <section className="cv-section" id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-cat">
              <h4><i className="ri-terminal-box-line"></i> Programming & Languages</h4>
              <p className="skill-list" style={{ color: 'var(--other-color)', marginTop: '8px' }}>
                Go, PHP (Laravel), Node.js (Express), TypeScript, JavaScript (ES6+), HTML5, CSS3.
              </p>
            </div>
            <div className="skill-cat">
              <h4><i className="ri-database-2-line"></i> Database & Tools</h4>
              <p className="skill-list" style={{ color: 'var(--other-color)', marginTop: '8px' }}>
                MySQL, PostgreSQL, RESTful API, Postman, Git, Docker, Figma, Jira, Trello.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Languages */}
        <section className="cv-section" id="languages">
          <h2>Languages</h2>
          <div className="skills-grid">
            <div className="skill-cat">
              <h4>Indonesian</h4>
              <p className="skill-list" style={{ color: 'var(--other-color)', marginTop: '5px' }}>Native Proficiency</p>
            </div>
            <div className="skill-cat">
              <h4>English</h4>
              <p className="skill-list" style={{ color: 'var(--other-color)', marginTop: '5px' }}>Intermediate Proficiency</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CV;
