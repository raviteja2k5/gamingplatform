import '../styles/gamecard.css';
function GameCard({ game, index }) {
  return (
    <article className="game-card" style={{ '--delay': `${Math.min(index, 16) * 45}ms` }}>
      <div className="game-image-wrap">
        <img src={game.thumbnail} alt={game.title} loading="lazy" />
        <span className="game-genre">{game.genre}</span>
      </div>

      <div className="game-content">
        <h3>{game.title}</h3>
        <p>{game.short_description}</p>

        <dl className="game-meta">
          <div>
            <dt>Platform</dt>
            <dd>{game.platform}</dd>
          </div>
          <div>
            <dt>Publisher</dt>
            <dd>{game.publisher}</dd>
          </div>
          <div>
            <dt>Release</dt>
            <dd>{game.release_date}</dd>
          </div>
        </dl>

        <a className="view-button" href={game.game_url} target="_blank" rel="noreferrer">
          View Game
        </a>
      </div>
    </article>
  );
}

export default GameCard;
