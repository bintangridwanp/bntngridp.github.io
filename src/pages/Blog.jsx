const BLOGS_DATA = [
  {
    title: "Overcoming the Articulation Barrier in Gen AI",
    link: "#",
    delay: 100
  },
  {
    title: "Making design system from scratch for B2C products",
    link: "#",
    delay: 200
  },
  {
    title: "How to make design system from scratch for SAAS products",
    link: "#",
    delay: 300
  }
];

function Blog() {
  return (
    <main className="page-content">
      {/* ===== Header ===== */}
      <section className="blog-header" data-aos="fade-down">
        <span>Thoughts and Blogs</span>
        <h1>Read My Narrative</h1>
        <p>Pages filled with technology wisdom, imagination and much more</p>
      </section>

      {/* ===== Grid ===== */}
      <section className="blog-grid">
        {BLOGS_DATA.map((blog) => (
          <a
            key={blog.title}
            href={blog.link}
            className="blog-card"
            data-aos="fade-up"
            data-aos-delay={blog.delay}
          >
            <h2>{blog.title}</h2>
            <div className="blog-icon">
              <i className="ri-arrow-right-line"></i>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

export default Blog;
