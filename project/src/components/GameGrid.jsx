import GameCard from './GameCard';
import '../styles/gamegrid.css';

function GameGrid({ games, searchTerm }) {
  if (!games.length) {
    return (
      <p className="empty-state">
        No elite titles found for "{searchTerm}". Try a different battle call.
      </p>
    );
  }

  return (
    <div className="game-grid">
      {games.map((game, index) => (
        <GameCard game={game} index={index} key={game.id} />
      ))}
    </div>
  );
}

export default GameGrid;
