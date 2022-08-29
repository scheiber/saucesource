import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NewSauce.css";

const API = process.env.REACT_APP_API_URL;

const NewSauce = () => {
  const navigate = useNavigate();
  const [sauce, setSauce] = useState({
    id: "",
    name: "",
    description: "",
    scoville: 0,
    is_organic: false,
    is_kosher: false,
    image: "",
  });

  const newForm = (event) => {
    setSauce({ ...sauce, [event.target.id]: event.target.value });
  };

  const handleForm = (sauce) => {
    axios
      .post(`${API}/sauces`, sauce)
      .then(() => {
        navigate("/sauces");
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const submitForm = (event) => {
    event.preventDefault();
    handleForm(sauce);
  };

  const orgCheckBox = () => {
    setSauce({ ...sauce, is_organic: !sauce.is_organic });
  };

  const kosCheckBox = () => {
    setSauce({ ...sauce, is_kosher: !sauce.is_kosher });
  };

  return (
    <div>
      <h1>Add a Sauce</h1>

      <form onSubmit={submitForm}>
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
        <input
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

        <label htmlFor="is_organic">Is this hot sauce organic?</label>
        <input
          type="checkbox"
          name="is_organic"
          onClick={orgCheckBox}
          id="is_organic"
        />
        <br />

        <label htmlFor="is_kosher">Is this hot sauce kosher?</label>
        <input
          type="checkbox"
          name="is_kosher"
          onClick={kosCheckBox}
          id="is_kosher"
        />
        <br />

        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          alt="sauce"
          value={sauce.image}
          onChange={newForm}
          required
        />
        <br />

        <Link to="/sauces">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default NewSauce;
