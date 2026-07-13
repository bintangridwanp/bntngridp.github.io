import { useState } from 'react';

const ALL_CERTIFICATIONS = [
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).jpg",
    desc: "Study the fundamentals of cloud computing using AWS, from core cloud computing concepts to the implementation of generative AI on AWS."
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Dasar Pemrograman JavaScript.jpg",
    desc: "Study the fundamentals of JavaScript, from basic concepts, syntax, and ES6 features to the concept of automated testing using popular frameworks."
  },
  {
    title: "Memulai Pemrograman dengan Haskell",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Memulai Pemrograman dengan Haskell.jpg",
    desc: "Learn Haskell programming, a purely functional language designed for education, research, and industrial applications."
  },
  {
    title: "Belajar Dasar Git dengan Github",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Dasar Git dengan GitHub.jpg",
    desc: "Learn how to manage data or code using Git with GitHub, from the basics of Git to collaborating with a team."
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Dasar Pemrograman Web.jpg",
    desc: "Study the basic components of HTML and CSS, which are the main foundation for becoming a front-end web developer."
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Membuat Front-End Web untuk Pemula.jpg",
    desc: "Study topics such as DOM manipulation, events, and web storage to enhance the functionality and interactivity of your website."
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg",
    desc: "Learn the steps to become a software developer, from the analysis and planning stages to software modification and documentation."
  },
  {
    title: "Belajar Dasar AI",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Dasar AI.jpg",
    desc: "Understand the fundamentals of Artificial Intelligence and its subfields, including Machine Learning and Deep Learning."
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Dasar Structured Query Language (SQL).jpg",
    desc: "Study the fundamental concepts of Structured Query Language (SQL), from an introduction to data and databases to practicing basic queries."
  },
  {
    title: "Belajar Penerapan Data Science dengan Microsoft Fabric",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Penerapan Data Science dengan Microsoft Fabric.jpg",
    desc: "Study end-to-end data science in Microsoft Fabric, from data exploration and building machine learning models to deploying and monitoring results."
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    tag: "dicoding",
    img: "/img/certifications/dicoding/Belajar Membuat Aplikasi Webdengan React.jpg",
    desc: "Study the fundamental skills for building React applications, including elements, components, props, event handling, and state."
  },
  {
    title: "Finalist for UI/UX Competition in BASIC Challenge 2024",
    tag: "competition",
    img: "/img/certifications/competitions/Basic sibinus UI UX competition.jpg",
    desc: "For Outstanding Participation as a Finalist in the UI/UX Competition at the Business and System Innovation Challenge 2024."
  },
  {
    title: "Play It Competition 2024",
    tag: "competition",
    img: "/img/certifications/competitions/Play it competition UI_UX.jpg",
    desc: "As a UI/UX Challenge participant in the national Play IT competition, organized by the Information Technology Department of Politeknik Negeri Malang 2024."
  },
  {
    title: "Finalist SurabayaDev 2024",
    tag: "competition",
    img: "/img/certifications/competitions/Surabaya DEV 2024.jpg",
    desc: "In recognition of achievement as a Finalist in the University UI/UX Competition, held during SurabayaDev’s 10th Anniversary 2024"
  },
  {
    title: "Hack Fest 2024",
    tag: "competition",
    img: "/img/certifications/competitions/Hack fest 2024.jpg",
    desc: "As a participant in HackFest 2024, a hackathon organized by GDSC Indonesia for university students to develop solutions based on the United Nations’ 17 SDGs."
  },
  {
    title: "It Festival 2025",
    tag: "competition",
    img: "/img/certifications/competitions/It Festival 2025.jpg",
    desc: "In recognition of participation in the Software Development Competition at IT Festival 2025, innovation in developing software solutions."
  }
];

const ITEMS_PER_PAGE = 9;

function Certifications() {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Mengubah filter sertifikat
  const handleFilterChange = (tag) => {
    setFilter(tag);
    setCurrentPage(1);
  };

  // Zoom gambar (buka lightbox)
  const handleZoomImg = (imgSrc) => {
    setLightboxImg(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  // Tutup lightbox
  const handleCloseZoom = () => {
    setLightboxImg(null);
    document.body.style.overflow = 'auto';
  };

  // Filter data sertifikat
  const filteredCerts = ALL_CERTIFICATIONS.filter(cert =>
    filter === 'all' || cert.tag.toLowerCase() === filter.toLowerCase()
  );

  // Paginated items
  const totalPages = Math.ceil(filteredCerts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCerts = filteredCerts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="page-content">
      {/* ===== Header ===== */}
      <section className="cert-header" data-aos="fade-down">
        <span>My Achievements</span>
        <h1>Professional Certifications</h1>
        <p>Validated expertise through recognized institutions and industry leaders.</p>
      </section>

      {/* ===== Filters ===== */}
      <div className="cert-filters" data-aos="fade-up">
        <button className={`filter-tag ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>All</button>
        <button className={`filter-tag ${filter === 'dicoding' ? 'active' : ''}`} onClick={() => handleFilterChange('dicoding')}>Dicoding</button>
        <button className={`filter-tag ${filter === 'google' ? 'active' : ''}`} onClick={() => handleFilterChange('google')}>Google</button>
        <button className={`filter-tag ${filter === 'aws' ? 'active' : ''}`} onClick={() => handleFilterChange('aws')}>AWS</button>
        <button className={`filter-tag ${filter === 'competition' ? 'active' : ''}`} onClick={() => handleFilterChange('competition')}>Competition</button>
      </div>

      {/* ===== Grid ===== */}
      <div className="cert-grid" id="cert-container">
        {paginatedCerts.map((cert, index) => (
          <div key={cert.title} className="cert-card" data-aos="fade-up" data-aos-delay={index * 50}>
            <div className="cert-img-box" onClick={() => handleZoomImg(cert.img)}>
              <img src={cert.img} alt={cert.title} loading="lazy" />
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
            </div>
          </div>
        ))}
        {paginatedCerts.length === 0 && (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px 0', color: 'var(--other-color)' }}>
            No certifications found in this category.
          </p>
        )}
      </div>

      {/* ===== Pagination ===== */}
      {totalPages > 1 && (
        <div id="cert-pagination" className="pagination-container">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? 'active' : ''}`}
              onClick={() => {
                setCurrentPage(page);
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* ===== Lightbox ===== */}
      {lightboxImg && (
        <div id="cert-lightbox" className="modal-overlay active" style={{ display: 'flex' }} onClick={handleCloseZoom}>
          <span className="close-modal" onClick={handleCloseZoom}>&times;</span>
          <img
            className="modal-img-zoom"
            id="zoomed-img"
            src={lightboxImg}
            alt="Zoomed Certification"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default Certifications;
