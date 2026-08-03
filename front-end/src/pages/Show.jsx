import SauceInfo from "../components/SauceInfo";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Show = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>SauceSource | Sauce Info</title>
        </Helmet>
      </HelmetProvider>
      <SauceInfo />
    </div>
  );
};

export default Show;
