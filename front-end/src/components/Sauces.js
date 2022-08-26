import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "./Sauces.css";
import SauceCard from "./SauceCard";

const API = process.env.REACT_APP_API_URL;

const Sauces = () => {
  const [sauces, setSauces] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/sauces`)
      .then((res) => {
        setSauces(res.data.payload);
      })
      .catch((error) => {
        console.warn("error");
      });
  }, []);

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
    </div>
  );
};
export default Sauces;
