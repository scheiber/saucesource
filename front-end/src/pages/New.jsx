import NewSauce from "../components/NewSauce";
import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const New = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>SauceSource | Add a Sauce</title>
        </Helmet>
      </HelmetProvider>
      <NewSauce />
    </div>
  );
};

export default New;
