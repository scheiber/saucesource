import "./Home.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Home = () => (
  <div className="tagline">
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | Home</title>
      </Helmet>
    </HelmetProvider>
    <a href="/sauces">
      <img alt="SauceSource wordmark" src="wordmark.png" />
    </a>
    <h1>Add some fuel to your fire.</h1>
    <h1>Set your appetite ablaze.</h1>
    <h1>Spice up your life.</h1>
    <h1>Feel the burn.</h1>
  </div>
);

export default Home;
