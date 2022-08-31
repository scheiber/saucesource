import "./Home.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = () => (
  <div className="tagline">
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | Home</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="splash-header">
      Add some <span className="fire">fuel</span> to your{" "}
      <span className="fire">fire</span>.
      <br />
    </h1>
    <h2 className="splash-stinger">
      Explore the spicy world of hot sauces with SauceSource.
    </h2>
    <a href="/sauces">
      <img
        className="splash-image"
        alt="Shelf of hot sauces"
        src="./images/shelf.jpg"
      />
    </a>
  </div>
);

export default Home;
