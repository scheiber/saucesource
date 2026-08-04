import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SauceInfo.css";
import { trackPromise } from "react-promise-tracker";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { FaEdit, FaShoppingCart, FaLeaf } from "react-icons/fa";
import {
  AiTwotoneDelete,
  AiOutlineArrowLeft,
  AiOutlineInfoCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { TbJewishStar } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { scovilleFlames } from "../helpers/scovilleFlames.js";

const formatter = new Intl.NumberFormat("en-US");

const API = import.meta.env.VITE_API_URL;

const infoIcon = { verticalAlign: "top" },
  buttonIcon = { verticalAlign: "top" },
  organicIcon = { color: "#00ff00", verticalAlign: "middle" },
  notIcon = { color: "#ff0000", verticalAlign: "middle" },
  kosherIcon = { color: "#87ceeb", verticalAlign: "middle" };

const SauceInfo = () => {
  const [sauce, setSauce] = useState([]);
  const [allSauces, setAllSauces] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    trackPromise(
      axios
        .get(`${API}/sauces/${id}`)
        .then((res) => {
          if (!res.data?.payload) throw new Error("Malformed response");
          setSauce(res.data.payload);
        })
        .catch((error) => {
          console.warn(error);
          navigate("/error");
        })
    );
  }, [id, navigate]);

  // Fetched once so the prev/next arrows work without relying on how the
  // user got to this page (direct link, refresh, "Surprise me", etc.).
  useEffect(() => {
    trackPromise(
      axios
        .get(`${API}/sauces`)
        .then((res) => {
          if (Array.isArray(res.data?.payload)) setAllSauces(res.data.payload);
        })
        .catch((error) => console.warn(error))
    );
  }, []);

  const currentIndex = allSauces.findIndex((s) => String(s.id) === id);
  const prevSauce = currentIndex > 0 ? allSauces[currentIndex - 1] : null;
  const nextSauce =
    currentIndex >= 0 && currentIndex < allSauces.length - 1
      ? allSauces[currentIndex + 1]
      : null;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey || event.altKey || event.ctrlKey) return;
      if (event.key === "ArrowLeft" && prevSauce) {
        navigate(`/sauces/${prevSauce.id}`);
      } else if (event.key === "ArrowRight" && nextSauce) {
        navigate(`/sauces/${nextSauce.id}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSauce, nextSauce, navigate]);

  const deleteSauce = () => {
    const answer = window.confirm(
      `Are you sure you want to delete this sauce? You'll have to add it again if you want it back.`
    );
    if (answer) {
      axios
        .delete(`${API}/sauces/${id}`)
        .then(() => {
          navigate("/sauces");
        })
        .catch((error) => {
          console.warn(error);
          navigate("/error");
        });
    }
  };

  return (
    <div className="sauce-info-wrapper">
      <HelmetProvider>
        <Helmet>
          <title>{`SauceSource | ${sauce.name || "Sauce Info"}`}</title>
        </Helmet>
      </HelmetProvider>
      {prevSauce && (
        <button
          className="sauce-nav-arrow sauce-nav-prev"
          onClick={() => navigate(`/sauces/${prevSauce.id}`)}
          aria-label="Previous sauce"
          title="Previous sauce"
        >
          <AiOutlineLeft />
        </button>
      )}
      <section className="sauce-info-grid">
        <div>
          <img className="sauce-info-image" src={sauce.image} alt={sauce.name} />
        </div>

        <article>
          <aside>
            <h1 className="sauce-info-name">{sauce.name}</h1>
            <div className="flames">{scovilleFlames(sauce.scoville)}</div>
            <div>
              <h4 className="sauce-info-scoville">
                {formatter.format(sauce.scoville)} Scoville heat units (SHU){" "}
                <a
                  title="What is a Scoville heat unit?"
                  className="scoville-info-icon"
                  href="/about"
                >
                  <AiOutlineInfoCircle style={infoIcon} />
                </a>
              </h4>
            </div>
            <div className="sauce-info-org-kos">
              {sauce.is_organic ? (
                <>
                  {" "}
                  <FaLeaf style={organicIcon} /> Organic
                </>
              ) : (
                <>
                  {" "}
                  <ImCross style={notIcon} /> Not Organic
                </>
              )}{" "}
              &nbsp;&nbsp;
              {sauce.is_kosher ? (
                <>
                  <TbJewishStar style={kosherIcon} /> Kosher
                </>
              ) : (
                <>
                  {" "}
                  <ImCross style={notIcon} /> Not Kosher
                </>
              )}
            </div>
            <div className="sauce-info-description">{sauce.description}</div>

            <div>
              <Link to="/sauces">
                <button>
                  <AiOutlineArrowLeft style={buttonIcon} /> Back
                </button>
              </Link>
              <Link to={`/sauces/${id}/edit`}>
                <button className="edit-button">
                  <FaEdit style={buttonIcon} /> Edit
                </button>
              </Link>
              <a target="_blank" rel="noopener noreferrer" href={sauce.link}>
                <button className="buy-button">
                  <FaShoppingCart style={buttonIcon} /> Buy
                </button>
              </a>

              <button className="delete-button" onClick={deleteSauce}>
                <AiTwotoneDelete style={buttonIcon} /> Delete
              </button>
            </div>
          </aside>
        </article>
      </section>
      {nextSauce && (
        <button
          className="sauce-nav-arrow sauce-nav-next"
          onClick={() => navigate(`/sauces/${nextSauce.id}`)}
          aria-label="Next sauce"
          title="Next sauce"
        >
          <AiOutlineRight />
        </button>
      )}
    </div>
  );
};

export default SauceInfo;
