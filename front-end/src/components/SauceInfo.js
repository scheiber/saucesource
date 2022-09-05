import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SauceInfo.css";
import { trackPromise } from "react-promise-tracker";

import { FaEdit, FaShoppingCart, FaLeaf } from "react-icons/fa";
import {
  AiTwotoneDelete,
  AiOutlineArrowLeft,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { TbJewishStar } from "react-icons/tb";
import { ImCross } from "react-icons/im";

const formatter = new Intl.NumberFormat("en-US");
const { scovilleFlames } = require("../helpers/scovilleFlames.js");

const API = process.env.REACT_APP_API_URL;

const infoIcon = { verticalAlign: "top" },
  buttonIcon = { verticalAlign: "top" },
  organicIcon = { color: "#00ff00", verticalAlign: "middle" },
  notIcon = { color: "#ff0000", verticalAlign: "middle" },
  kosherIcon = { color: "#87ceeb", verticalAlign: "middle" };

const SauceInfo = () => {
  const [sauce, setSauce] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    trackPromise(
    axios
      .get(`${API}/sauces/${id}`)
      .then((res) => {
        setSauce(res.data.payload);
      })
      .catch((error) => {
        console.warn(error);
      }));
  }, [id, navigate]);

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
        });
    }
  };

  return (
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
  );
};

export default SauceInfo;
