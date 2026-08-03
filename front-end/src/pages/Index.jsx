import Sauces from "../components/Sauces";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>SauceSource | All Sauces</title>
        </Helmet>
      </HelmetProvider>
      <Sauces />
    </div>
  );
};

export default Index;
