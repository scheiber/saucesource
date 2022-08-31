import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./EditSauce.css";

const API = process.env.REACT_APP_API_URL;

const EditSauce = () => {
  const navigate = useNavigate();
  let { index } = useParams();
  const [sauce, setSauce] = useState({
    id: "",
    name: "",
    description: "",
    scoville: "",
    is_organic: false,
    is_kosher: false,
    link: "",
    image: "",
  });

  const newForm = (event) => {
    setSauce({ ...sauce, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/sauces/${index}`)
      .then((res) => {
        setSauce(res.data.payload);
      })
      .catch();
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/sauces/${index}`, sauce)
      .then(() => {
        navigate(`/sauces/${index}`);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const orgCheckBox = () => {
    setSauce({ ...sauce, is_organic: !sauce.is_organic });
  };

  const kosCheckBox = () => {
    setSauce({ ...sauce, is_kosher: !sauce.is_kosher });
  };

  return (
    <div>
      <h1>Edit Sauce</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={sauce.name}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          rows="5"
          cols="20"
          id="description"
          type="text"
          value={sauce.description}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="scoville">Scoville Rating:</label>
        <input
          id="scoville"
          type="number"
          value={sauce.scoville}
          onChange={newForm}
          required
        />
        <br />

        <input
          type="checkbox"
          name="is_organic"
          onClick={orgCheckBox}
          id="is_organic"
        />
        <label htmlFor="is_organic">This hot sauce is organic</label>
        <br />

        <input
          type="checkbox"
          name="is_kosher"
          onClick={kosCheckBox}
          id="is_kosher"
        />
        <label htmlFor="is_kosher">This hot sauce is kosher</label>
        <br />

        <label htmlFor="link">Link:</label>
        <input
          id="link"
          type="url"
          pattern="https?://.+"
          value={sauce.link}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="url"
          pattern="https?://.+"
          alt="sauce"
          value={sauce.image}
          onChange={newForm}
          required
        />
        <br />

        <input className="submit-button" type="submit" value="Save" />
        <Link to={`/sauces`}>
          <button className="cancel-button">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default EditSauce;
