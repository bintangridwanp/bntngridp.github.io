import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SEARCH_ITEMS = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'CV', path: '/cv' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/' },
  { name: 'Repositories', path: '/repositories' },
];

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input ketika modal dibuka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredItems = SEARCH_ITEMS.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleItemClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="search-modal active" id="search-modal" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredItems.map((item) => (
            <li key={item.path}>
              <a href="javascript:void(0)" onClick={() => handleItemClick(item.path)}>
                {item.name}
              </a>
            </li>
          ))}
          {filteredItems.length === 0 && (
            <li style={{ color: 'var(--other-color)', padding: '10px 15px', textAlign: 'center' }}>
              No results found.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchModal;
