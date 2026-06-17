import { Link } from "react-router-dom";
import "./SauceCard.css";
import { FaLeaf } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";

const formatter = new Intl.NumberFormat("en-US");
const { scovilleFlames } = require("../helpers/scovilleFlames.js");

const organicIcon = { color: "#00ff00", verticalAlign: "middle" };
const kosherIcon = { color: "#87ceeb", verticalAlign: "middle" };

function SauceCard({ sauce }) {
  return (
    <article className="sauce-card">
      <div>
        <Link to={`/sauces/${sauce.id}`}>
          <img className="sauce-bottle" src={sauce.image} alt={sauce.name} />
        </Link>
      </div>
      <div>
        <Link to={`/sauces/${sauce.id}`}>
          <div className="sauce-name">{sauce.name}</div>
        </Link>
        <div className="scoville-card">
          {scovilleFlames(sauce.scoville)}
        </div>
        <div
          title='"SHU" stands for Scoville Heat Units'
          className="scoville-numerical"
        >
          {formatter.format(sauce.scoville)} SHU
        </div>
        {(sauce.is_organic || sauce.is_kosher) && (
          <div className="sauce-card-badges">
            {sauce.is_organic && (
              <span role="img" aria-label="Organic">
                <FaLeaf style={organicIcon} />
              </span>
            )}
            {sauce.is_kosher && (
              <span role="img" aria-label="Kosher">
                <TbJewishStar style={kosherIcon} />
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default SauceCard;
