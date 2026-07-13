import { useState } from 'react';

const PROJECTS_DATA = {
  pmi: {
    tag: 'Laravel • 2023',
    title: 'Financial and Management for PMI',
    desc: 'Optimized transaction tracking, automated financial reporting, and secure user role management.',
    overview: 'An end-to-end financial management system tailored for PMI (Palang Merah Indonesia) to optimize and automate cash flows, donations, and expense reporting.',
    architecture: 'Built on Laravel MVC architecture with a MySQL relational database. Integrated secure session handling and role-based access control (RBAC).',
    erd: '/img/port-1.jpg', // Menggunakan gambar proyek sebagai representasi visual jika ERD spesifik tidak ada
    github: 'https://github.com/bntngridp',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap']
  },
  telu: {
    tag: 'Flutter • 2024',
    title: 'My Tel-U Traffic Status',
    desc: 'Real-time campus traffic data, user-friendly UI with brand colors.',
    overview: 'A mobile application built to monitor and report campus traffic density at Telkom University in real-time, helping students plan their commute.',
    architecture: 'Flutter frontend consuming a RESTful API built with Go/Node.js, using WebSockets for live traffic status updates.',
    erd: '/img/port-2.jpg',
    github: 'https://github.com/bntngridp',
    tech: ['Flutter', 'Dart', 'Node.js', 'WebSockets']
  },
  balok: {
    tag: 'Kotlin • 2023',
    title: 'Volume Balok Simple App',
    desc: 'Interactive mathematical calculation, lightweight Android performance.',
    overview: 'A simple, highly optimized Android application designed to calculate the volume and surface area of block objects instantly.',
    architecture: 'Native Android app developed in Kotlin utilizing Jetpack Compose for UI rendering, following clean architecture guidelines.',
    erd: '/img/port-3.jpg',
    github: 'https://github.com/bntngridp',
    tech: ['Kotlin', 'Android SDK', 'Jetpack Compose']
  }
};

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (key) => {
    setSelectedProject(PROJECTS_DATA[key]);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="page-content">
      <section className="page-header" data-aos="fade-down">
        <span>Curated Work</span>
        <h1>Featured Case Studies</h1>
        <p>Compilation of case studies and projects that showcase my skills in backend development and system architecture.</p>
      </section>

      <section className="portfolio-container">
        {/* PMI Project Card */}
        <div className="portfolio-card" data-aos="fade-up">
          <div className="card-info">
            <div className="card-tag">Laravel • 2023</div>
            <h2>Financial and Management for PMI</h2>
            <ul>
              <li><i className="ri-checkbox-circle-fill"></i> Optimized transaction tracking.</li>
              <li><i className="ri-checkbox-circle-fill"></i> Automated financial reporting.</li>
              <li><i className="ri-checkbox-circle-fill"></i> Secure user role management.</li>
            </ul>
            <button type="button" className="view-case-btn" onClick={() => openProject('pmi')} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              View Details <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="card-img">
            <img src="/img/port-1.jpg" alt="PMI Project" />
          </div>
        </div>

        {/* TelU Project Card */}
        <div className="portfolio-card" data-aos="fade-up" data-aos-delay="100">
          <div className="card-info">
            <div className="card-tag">Flutter • 2024</div>
            <h2>My Tel-U Traffic Status</h2>
            <ul>
              <li><i className="ri-checkbox-circle-fill"></i> Real-time campus traffic data.</li>
              <li><i className="ri-checkbox-circle-fill"></i> User-friendly UI with brand colors.</li>
            </ul>
            <button type="button" className="view-case-btn" onClick={() => openProject('telu')} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              View Details <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="card-img">
            <img src="/img/port-2.jpg" alt="Traffic Project" />
          </div>
        </div>

        {/* Balok Project Card */}
        <div className="portfolio-card" data-aos="fade-up" data-aos-delay="200">
          <div className="card-info">
            <div className="card-tag">Kotlin • 2023</div>
            <h2>Volume Balok Simple App</h2>
            <ul>
              <li><i className="ri-checkbox-circle-fill"></i> Interactive mathematical calculation.</li>
              <li><i className="ri-checkbox-circle-fill"></i> Lightweight Android performance.</li>
            </ul>
            <button type="button" className="view-case-btn" onClick={() => openProject('balok')} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              View Details <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="card-img">
            <img src="/img/port-3.jpg" alt="Balok Project" />
          </div>
        </div>
      </section>

      {/* ===== Project Modal ===== */}
      {selectedProject && (
        <div className="modal-overlay active" id="project-modal" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeProject}>&times;</span>

            <div className="modal-body">
              <div className="modal-header-info">
                <span className="card-tag">{selectedProject.tag}</span>
                <h2>{selectedProject.title}</h2>

                <div className="tech-stack-img-container" style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="lang-tag" style={{ background: 'var(--second-bg-color)', padding: '5px 10px', borderRadius: '4px', fontSize: '0.85rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div id="github-link-container" style={{ marginTop: '20px' }}>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.9rem' }}>
                    <i className="ri-github-fill" style={{ fontSize: '1.2rem' }}></i> View on GitHub
                  </a>
                </div>
              </div>

              <div className="modal-grid">
                <div className="modal-left">
                  <div className="modal-section">
                    <h3><i className="ri-information-line"></i> Overview</h3>
                    <p>{selectedProject.overview}</p>
                  </div>
                  <div className="modal-section">
                    <h3><i className="ri-node-tree"></i> System Architecture</h3>
                    <p>{selectedProject.architecture}</p>
                  </div>
                </div>

                <div className="modal-right">
                  <div className="modal-section">
                    <h3><i className="ri-database-2-line"></i> Main Preview</h3>
                    <div className="img-box-modal">
                      <img src={selectedProject.erd} alt={selectedProject.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Portfolio;
