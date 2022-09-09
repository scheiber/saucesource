import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineSend, AiOutlineLink } from "react-icons/ai";
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

const NewSauce = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/sauces`, sauce)
      .then(() => {
        navigate("/sauces");
      })
      .catch((error) => {
        console.warn(error);
        navigate("/error");
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
      <h1>Add a Sauce</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          type="text"
          size="25"
          value={sauce.name}
          onChange={newForm}
          required
        />
        <br />

        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          rows="7"
          cols="25"
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
          className="checkmark"
          onClick={orgCheckBox}
          id="is_organic"
        />
        <label htmlFor="is_organic">
          This hot sauce is <FaLeaf style={organicIcon} /> organic
        </label>
        <br />

        <input
          type="checkbox"
          className="checkmark"
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
          size="40"
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
          size="40"
          pattern="https?://.+"
          value={sauce.image}
          onChange={newForm}
          required
        />
        <br />
        <Link to={`/sauces`}>
          <button className="cancel-button">
            <GiCancel style={buttonIcon} /> Cancel
          </button>
        </Link>
        <button className="submit-button" type="submit" value="Save">
          <AiOutlineSend style={buttonIcon} /> Submit
        </button>
      </form>
    </div>
  );
};

export default NewSauce;
