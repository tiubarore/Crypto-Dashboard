const CoinCard = ({ coin }) => {
  return (
    <div className="coin-card">
      <div className="coin-header">
        <img src={coin.image} alt={coin.name} className="coin-image" />
        <div className="">
          <h2>{coin.name}</h2>
          <p className="symbol">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>
      <p>${coin.current_price.toLocaleString()}</p>
      <p
        className={
          coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
        }
      >
        <span className="last">Last 24h: </span>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
      {coin.è}
    </div>
  );
};
export default CoinCard;
