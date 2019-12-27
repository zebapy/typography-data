import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { withApollo } from "../src/graphql/client";
import { indexQuery } from "../src/graphql/queries";
import { IndexQuery } from "../types/IndexQuery";
import { useQuery } from "@apollo/react-hooks";

const Home = () => {
  const { data, error, loading } = useQuery<IndexQuery>(indexQuery);

  if (error) {
    return (
      <div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  if (data) {
    const { fontFamilies } = data;

    return fontFamilies.map(fam => {
      return (
        <div key={fam.id}>
          <h2>{fam.family}</h2>
        </div>
      );
    });
  }

  return <div>Test</div>;
};

export default withApollo(Home);
