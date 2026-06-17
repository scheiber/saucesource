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
    <section className="sauce-card">
      <ul>
        <li>
          <Link to={`/sauces/${sauce.id}`}>
            <img className="sauce-bottle" src={sauce.image} alt={sauce.name} />
          </Link>
        </li>
        <main>
          <article>
            <div>
              <Link to={`/sauces/${sauce.id}`}>
                <li className="sauce-name">{sauce.name}</li>
              </Link>
              <li className="scoville-card">
                {scovilleFlames(sauce.scoville)}
              </li>
              <li
                title='"SHU" stands for Scoville Heat Units'
                className="scoville-numerical"
              >
                {formatter.format(sauce.scoville)} SHU
              </li>
              {(sauce.is_organic || sauce.is_kosher) && (
                <li className="sauce-card-badges">
                  {sauce.is_organic && (
                    <FaLeaf style={organicIcon} title="Organic" />
                  )}
                  {sauce.is_kosher && (
                    <TbJewishStar style={kosherIcon} title="Kosher" />
                  )}
                </li>
              )}
            </div>
          </article>
        </main>
      </ul>
    </section>
  );
}

export default SauceCard;
