import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./EditSauce.css";
import { AiFillSave, AiOutlineLink } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { BsImage } from "react-icons/bs";

const API = process.env.REACT_APP_API_URL;

const buttonIcon = { verticalAlign: "top" },
  organicIcon = { color: "#00ff00", verticalAlign: "middle" },
  kosherIcon = { color: "#87ceeb", verticalAlign: "middle" },
  linkIcon = { color: "#BCBCBC", verticalAlign: "middle" },
  imageIcon = { color: "#e69138", verticalAlign: "middle" };

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

        <label htmlFor="scoville">🔥 Scoville Rating:</label>
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
        <label htmlFor="is_organic">
          This hot sauce is <FaLeaf style={organicIcon} /> organic
        </label>
        <br />

        <input
          type="checkbox"
          name="is_kosher"
          onClick={kosCheckBox}
          id="is_kosher"
        />
        <label htmlFor="is_kosher">
          This hot sauce is <TbJewishStar style={kosherIcon} /> kosher
        </label>
        <br />

        <label htmlFor="link">
          <AiOutlineLink style={linkIcon} /> Link:
        </label>
        <input
          id="link"
          type="url"
          pattern="https?://.+"
          value={sauce.link}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="image">
          <BsImage style={imageIcon} /> Image:
        </label>
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

        <button className="submit-button" type="submit" value="Save">
          <AiFillSave style={buttonIcon} /> Save
        </button>
        <Link to={`/sauces/${index}`}>
          <button className="cancel-button">
            <GiCancel style={buttonIcon} /> Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default EditSauce;
