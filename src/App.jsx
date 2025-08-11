import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market-cap-desc&per_page=10&page=1&sparkline=false`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchCoins();
  }, []);

  return (
    <div>
      <h1>Crypto Dashboard</h1>

      {isLoading && <p>Loading Coins...</p>}
      {error && <div className="error">{error}</div>}
      {!isLoading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <CoinCard coin={coin} key={coin.id} />
          ))}
        </main>
      )}
    </div>
  );
};
export default App;
