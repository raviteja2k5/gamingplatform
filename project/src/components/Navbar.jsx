import '../styles/navbar.css';

const logoSrc = '/src/assets/logo.png';

function Navbar({ searchTerm, onSearchChange }) {
  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="NovaPlay home">
          <span className="brand-mark">
            <img
              src={logoSrc}
              alt="NovaPlay logo"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
            <span className="brand-fallback">N</span>
          </span>
          <span className="brand-text">NovaPlay</span>
        </a>
        <label className="search-panel" aria-label="Search games">
          <span className="search-glyph" aria-hidden="true" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search your next battle..."
          />
        </label>

        <div className="nav-links">
          <a href="#top">Home</a>
          <a href="#games">Trending</a>
          <a href="#games">Shooter</a>
          <a href="#games">New Releases</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
