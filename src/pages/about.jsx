import { Link } from "react-router";
const AboutPage = () => {
  return (
    <div className="about">
      <h1>About Crypto Dashboard</h1>
      <p>
        Crypto Dash is a simple React application that displays live
        cryptocurrency data using the CoinGecko API.
      </p>
      <p>
        You can explore the top cryptocurrencies by market cap, filter by name
        or symbol, and sort them by price, market cap, or 24-hour change.
      </p>
      <p>
        🚀 Future features might include favorites, pagination, and much more!
      </p>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default AboutPage;
