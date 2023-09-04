import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h4>Welcome to my Gatsby site!</h4>

        <p>I'm learning Gatsby</p>
      </Layout>
    </main>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>Gatsby - Home Page</title>;
