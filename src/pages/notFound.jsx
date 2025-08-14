import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="about">
      <h1>Oops! Error 404 The page you're looking for does not exist</h1>
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};
export default NotFound;
