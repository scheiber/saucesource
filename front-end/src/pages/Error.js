import "./Error.css";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Error = () => (
  <div className="error-page">
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | Not Found</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="error-title">404: Not Found.</h1>
    <div className="error-grid">
      <div className="error-image">
        <Link to="/">
          <img alt="Error" className="extinguisher" src="/images/error.png" />
        </Link>
      </div>
      <div className="error-text">
        <p>
          The page you are looking for might have been removed, had its named
          changed, or is temporarily unavailable.
        </p>
        <p>
          <Link to="/">Click here</Link> to go back home.
        </p>
      </div>
    </div>
  </div>
);

export default Error;
