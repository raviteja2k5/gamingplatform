import '../styles/loader.css';

function Loader() {
  return (
    <div className="loader-shell" role="status" aria-live="polite">
      <div className="loader-ring" />
      <p>Loading Elite Games...</p>
    </div>
  );
}

export default Loader;
