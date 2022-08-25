import "./Error.css";
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
        <a href="/">
          <img alt="Error" className="extinguisher" src="./images/error.png" />
        </a>
      </div>
      <div className="error-text">
        <p>
          The page you are looking for might have been removed, had its named
          changed, or is temporarily unavailable.
        </p>
        <p>
          <a href="/">Click here</a> to go back home.
        </p>
      </div>
    </div>
  </div>
);

export default Error;
