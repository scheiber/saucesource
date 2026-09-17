import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { RotatingLines } from "react-loader-spinner";
import SauceCard from "../components/SauceCard";

const API = import.meta.env.VITE_API_URL;
const FEATURED_COUNT = 5;
const ROTATE_INTERVAL_MS = 5000;
const FEATURED_LOADING_AREA = "featured-sauces";

const pickRandom = (sauces, count) =>
  [...sauces].sort(() => Math.random() - 0.5).slice(0, count);

const Home = () => {
  const [sauces, setSauces] = useState([]);
  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();
  const { promiseInProgress } = usePromiseTracker({
    area: FEATURED_LOADING_AREA,
  });

  useEffect(() => {
    trackPromise(
      axios
        .get(`${API}/sauces`)
        .then((res) => {
          if (!Array.isArray(res.data?.payload))
            throw new Error("Malformed response");
          setSauces(res.data.payload);
        })
        .catch((error) => {
          console.warn(error);
          navigate("/error");
        }),
      FEATURED_LOADING_AREA
    );
  }, [navigate]);

  useEffect(() => {
    if (sauces.length === 0) return;
    const rotate = () =>
      setFeatured(pickRandom(sauces, Math.min(FEATURED_COUNT, sauces.length)));
    rotate();
    const interval = setInterval(rotate, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [sauces]);

  return (
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

      {promiseInProgress ? (
        <div className="featured-loading">
          <RotatingLines
            strokeColor="rgb(255, 120, 0)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <section
          key={featured.map((sauce) => sauce.id).join("-")}
          className="featured-grid"
          aria-label="Featured sauces"
        >
          {featured.map((sauce) => (
            <SauceCard key={sauce.id} sauce={sauce} />
          ))}
        </section>
      )}

      <Link to="/sauces">
        <button className="see-all-button">See all the sauces &rarr;</button>
      </Link>
    </div>
  );
};

export default Home;
