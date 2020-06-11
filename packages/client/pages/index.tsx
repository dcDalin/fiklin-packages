import React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../apollo/apollo";

const NOSSR = () => {
  return (
    <Layout>
      <h1>This should be rendered on client side</h1>
    </Layout>
  );
};

export default withApollo({ ssr: false })(NOSSR);
