import "./Home.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = () => (
  <div className="tagline">
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | Home</title>
      </Helmet>
    </HelmetProvider>
    <h1 className="splash-text">
      Add some fuel to your fire.
      <br />
      Explore the spicy world of hot sauces.
    </h1>
    <a href="/sauces">
      <img
        className="splash"
        alt="Shelf of hot sauces"
        src="./images/shelf.jpg"
      />
    </a>
  </div>
);

export default Home;
