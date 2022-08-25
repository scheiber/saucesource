import "./About.css";
import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => (
  <div className="about">
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | About</title>
      </Helmet>
    </HelmetProvider>
    <h2>Set your appetite ablaze.</h2>
    <div className="description">
      <p>
        This is SauceSource, your new best friend for finding the perfect hot
        sauce.
      </p>
      <p>
        Need to spice up your life? SauceSource is a web app that lets you learn
        about and curate different types of hot sauces.
      </p>
      <p>
        You can use this site to see a selection of a variety of sauces,
        complete with images of their bottles, as well as information about
        their rating on Scoville Scale, what foods they go best with, and if the
        sauce is organic or kosher.
      </p>
      <p>Feel the burn and add some fuel to your fire.</p>
    </div>
    <article>
      <img
        className="wordmark"
        src="./images/wordmark.png"
        alt="SauceSource Wordmark"
      />
      <h3>Created by Jonathan Scheiber</h3>
    </article>
    <article>
      <img
        className="headshot"
        src="./images/jonathan.png"
        alt="Jonathan Scheiber"
      ></img>
    </article>
    <p className="bio-text">
      Jonathan is a full-stack web developer with a background in IT and
      customer service from New York, NY.
      <br /> His interests include user experience (UX) design, cybersecurity,
      and accessibility.
    </p>
    <a href="https://github.com/Scheiber">
      <img
        className="icon"
        alt="GitHub"
        title="GitHub"
        src="./icons/github.png"
      />
    </a>
    <a href="https://www.linkedin.com/in/jonscheiber/">
      <img
        className="icon"
        alt="LinkedIn"
        title="LinkedIn"
        src="./icons/linkedin.png"
      />
    </a>
    <p>
      <a href="https://github.com/scheiber/saucesource">
        Technical information and "sauce" code
      </a>{" "}
      available on GitHub.
    </p>
  </div>
);

export default About;
