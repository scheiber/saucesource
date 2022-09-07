import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sauces.css";
import SauceCard from "./SauceCard";
import { trackPromise } from "react-promise-tracker";
import ScrollUpButton from "react-scroll-up-button";

const API = process.env.REACT_APP_API_URL;

const Sauces = () => {
  const [sauces, setSauces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    trackPromise(
      axios
        .get(`${API}/sauces`)
        .then((res) => {
          setSauces(res.data.payload);
        })
        .catch((error) => {
          console.warn("error");
          navigate("/error");
        })
    );
  }, [navigate]);

  return (
    <div>
      <h1>All Sauces</h1>
      <section className="sauce-grid">
        {sauces.length > 0
          ? sauces.map((sauce, index) => {
              return <SauceCard key={index} sauce={sauce} />;
            })
          : null}
      </section>
      <ScrollUpButton style={{ backgroundColor: "rgb(255, 120, 0, 0.75)" }} />
    </div>
  );
};
export default Sauces;
