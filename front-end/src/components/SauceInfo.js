import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SauceInfo.css";

const { scovilleFlames } = require("../helpers/scovilleFlames.js");

const API = process.env.REACT_APP_API_URL;

const SauceInfo = () => {
  const [sauce, setSauce] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/sauces/${id}`)
      .then((res) => {
        setSauce(res.data.payload);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [id, navigate]);

  const deleteSauce = () => {
    axios
      .delete(`${API}/sauces/${id}`)
      .then(() => {
        navigate("/sauces");
      })
      .catch((error) => {
        console.warn(error);
      });
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
            <h4>{sauce.scoville} Scoville heat units (SHU)</h4>
          </div>
          <div>
            {sauce.is_organic ? <h4>Organic</h4> : <h4>Not Organic</h4>}
            {sauce.is_kosher ? <h4>Kosher</h4> : <h4>Not Kosher</h4>}
          </div>
          <div className="sauce-info-description">{sauce.description}</div>

          <div>
            <Link to="/sauces">
              <button>Back</button>
            </Link>
            <Link to={`/sauces/${id}/edit`}>
              <button>Edit</button>
            </Link>

            <button onClick={deleteSauce}>Delete</button>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default SauceInfo;
