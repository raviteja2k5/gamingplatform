import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Loader from './components/Loader';
import Footer from './components/Footer';
import './App.css';

const API_URL =
  'https://corsproxy.io/?https://www.freetogame.com/api/games?category=shooter';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(API_URL);
        setGames(response.data);
      } catch (err) {
        console.log(err);
        setError('Unable to load elite games. Please try again soon.');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const filteredGames = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (!normalizedSearch) {
      return games;
    }

    return games.filter((game) =>
      game.title.toLowerCase().includes(normalizedSearch),
    );
  }, [games, searchTerm]);

  const scrollToGames = () => {
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main>
        <Hero onExplore={scrollToGames} />
        <section className="games-section" id="games">
          <div className="section-heading reveal-up">
            <span className="section-kicker">Shooter Arsenal</span>
            <h2>Featured Elite Games</h2>
            <p>
              Curated shooter worlds with cinematic action, competitive firepower,
              and premium multiplayer momentum.
            </p>
          </div>

          {loading && <Loader />}

          {!loading && error && <p className="state-message">{error}</p>}

          {!loading && !error && (
            <GameGrid games={filteredGames} searchTerm={searchTerm} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
