import { useState, useEffect } from 'react';

const USERNAME = 'bntngridp';
const ITEMS_PER_PAGE = 9;

function Repositories() {
  const [allRepos, setAllRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States untuk Filter & Pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [langFilter, setLangFilter] = useState('all');
  const [sortBy, setSortBy] = useState('updated');
  const [currentPage, setCurrentPage] = useState(1);

  // Stats
  const [stats, setStats] = useState({ repos: 0, stars: 0, forks: 0 });

  // Fetch Repositories dari GitHub API
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repositories from GitHub.');
        return res.json();
      })
      .then(data => {
        setAllRepos(data);
        setFilteredRepos(data);
        
        // Hitung stats
        let totalStars = 0;
        let totalForks = 0;
        data.forEach(repo => {
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;
        });

        setStats({
          repos: data.length,
          stars: totalStars,
          forks: totalForks
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handler Efek Filter dan Sort
  useEffect(() => {
    let result = [...allRepos];

    // Filter Pencarian
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(repo =>
        repo.name.toLowerCase().includes(q) ||
        (repo.description || '').toLowerCase().includes(q)
      );
    }

    // Filter Bahasa
    if (langFilter !== 'all') {
      result = result.filter(repo =>
        (repo.language || '').toLowerCase() === langFilter.toLowerCase()
      );
    }

    // Sorting
    if (sortBy === 'stars') {
      result.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
    } else {
      // Bawaan sorting by updated date
      result.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }

    setFilteredRepos(result);
    setCurrentPage(1); // Reset ke halaman pertama setiap kali filter berubah
  }, [searchQuery, langFilter, sortBy, allRepos]);

  // Reset Filter
  const handleReset = () => {
    setSearchQuery('');
    setLangFilter('all');
    setSortBy('updated');
  };

  // Pagination
  const totalPages = Math.ceil(filteredRepos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRepos = filteredRepos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="page-content">
      {/* ===== Header & Stats ===== */}
      <section className="repo-header" data-aos="fade-down">
        <div className="repo-stats">
          <div className="stat-item">
            <h2>{loading ? '...' : stats.repos}</h2>
            <p>Repositories</p>
          </div>
          <div className="stat-item">
            <h2>{loading ? '...' : stats.stars}</h2>
            <p>Total Stars</p>
          </div>
          <div className="stat-item">
            <h2>{loading ? '...' : stats.forks}</h2>
            <p>Total Forks</p>
          </div>
        </div>
      </section>

      {/* ===== Filters ===== */}
      <div className="repo-filters" data-aos="fade-up">
        <input
          type="text"
          className="search-input"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="filter-select"
          value={langFilter}
          onChange={(e) => setLangFilter(e.target.value)}
        >
          <option value="all">All Languages</option>
          <option value="PHP">PHP</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Go">Go</option>
          <option value="Dart">Dart</option>
          <option value="TypeScript">TypeScript</option>
          <option value="HTML">HTML</option>
        </select>
        <select
          className="filter-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="updated">Recently Updated</option>
          <option value="stars">Most Stars</option>
        </select>
        <button type="button" className="reset-btn" onClick={handleReset}>
          <i className="ri-refresh-line"></i> RESET
        </button>
      </div>

      {/* ===== Repo Grid ===== */}
      <div id="repo-container" className="repo-grid">
        {loading && (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px 0' }}>
            Fetching repositories from GitHub...
          </p>
        )}

        {error && !loading && (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px 0', color: '#ff6b6b' }}>
            Error: {error}
          </p>
        )}

        {!loading && !error && paginatedRepos.map((repo, index) => {
          const updatedAt = new Date(repo.updated_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });

          return (
            <div key={repo.id} className="repo-card" data-aos="fade-up" data-aos-delay={index * 50}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div className="repo-title">
                  <i className="ri-git-repository-line"></i> {repo.name}
                </div>
                <p className="repo-desc">{repo.description || 'No description available.'}</p>
              </a>
              <div className="repo-meta">
                <span><i className="ri-time-line"></i> Updated {updatedAt}</span>
                <span className="lang-tag">{repo.language || 'Plain'}</span>
              </div>
            </div>
          );
        })}

        {!loading && !error && filteredRepos.length === 0 && (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '50px 0', color: 'var(--other-color)' }}>
            No repositories found.
          </p>
        )}
      </div>

      {/* ===== Pagination ===== */}
      {totalPages > 1 && (
        <div id="pagination" className="pagination-container">
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
    </main>
  );
}

export default Repositories;
