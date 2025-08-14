import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="about">
      <h1 className="text-3xl">This is a Crypto Dashboard, made in React</h1>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};
export default AboutPage;
