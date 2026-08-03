import EditSauce from "../components/EditSauce";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Edit = () => (
  <div>
    <HelmetProvider>
      <Helmet>
        <title>SauceSource | Edit Sauce</title>
      </Helmet>
    </HelmetProvider>
    <EditSauce />
  </div>
);

export default Edit;
