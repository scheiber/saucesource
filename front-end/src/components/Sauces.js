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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterOrganic, setFilterOrganic] = useState(false);
  const [filterKosher, setFilterKosher] = useState(false);
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

  const displayedSauces = sauces
    .filter((sauce) =>
      sauce.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((sauce) => (filterOrganic ? sauce.is_organic : true))
    .filter((sauce) => (filterKosher ? sauce.is_kosher : true))
    .sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      if (sortBy === "scoville-asc") return a.scoville - b.scoville;
      if (sortBy === "scoville-desc") return b.scoville - a.scoville;
      return 0;
    });

  return (
    <div>
      <h1>All Sauces</h1>
      <div className="sauce-controls">
        <input
          type="text"
          className="sauce-search"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="sauce-sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort by...</option>
          <option value="name-asc">Name (A–Z)</option>
          <option value="name-desc">Name (Z–A)</option>
          <option value="scoville-asc">Scoville (low to high)</option>
          <option value="scoville-desc">Scoville (high to low)</option>
        </select>
        <label className="sauce-filter-label">
          <input
            type="checkbox"
            className="checkmark"
            checked={filterOrganic}
            onChange={(e) => setFilterOrganic(e.target.checked)}
          />
          Organic only
        </label>
        <label className="sauce-filter-label">
          <input
            type="checkbox"
            className="checkmark"
            checked={filterKosher}
            onChange={(e) => setFilterKosher(e.target.checked)}
          />
          Kosher only
        </label>
      </div>
      <section className="sauce-grid">
        {displayedSauces.length > 0 ? (
          displayedSauces.map((sauce) => (
            <SauceCard key={sauce.id} sauce={sauce} />
          ))
        ) : sauces.length > 0 ? (
          <p className="no-results">No sauces match your search.</p>
        ) : null}
      </section>
      <ScrollUpButton style={{ backgroundColor: "rgb(255, 120, 0, 0.75)" }} />
    </div>
  );
};
export default Sauces;
