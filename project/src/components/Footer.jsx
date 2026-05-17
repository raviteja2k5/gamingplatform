import '../styles/footer.css';

const logoSrc = '/src/assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-logo">
          <img
            src={logoSrc}
            alt="NovaPlay logo"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <span>N</span>
        </span>
        <div>
          <strong>NovaPlay</strong>
          <p>Premium worlds. Elite battles. Cinematic discovery.</p>
        </div>
      </div>

      <div className="socials" aria-label="Social links">
        <a href="#top">X</a>
        <a href="#top">YT</a>
        <a href="#top">IG</a>
      </div>
    </footer>
  );
}

export default Footer;
