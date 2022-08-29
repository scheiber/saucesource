import { Link } from "react-router-dom";
import "./SauceCard.css";

const formatter = new Intl.NumberFormat("en-US");
const { scovilleFlames } = require("../helpers/scovilleFlames.js");

function SauceCard({ sauce }) {
  return (
    <section>
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
              <li>{formatter.format(sauce.scoville)}</li>
            </div>
          </article>
        </main>
      </ul>
    </section>
  );
}

export default SauceCard;
