import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h4>Welcome to my Gatsby site!</h4>
        <p>I'm learning Gatsby</p>
        <StaticImage
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          alt="Clifford"
        />

        <Link to="https://www.google.com">
          <StaticImage src="../assets/Bills.png" alt="Bills" />
        </Link>
      </Layout>
    </main>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <title>Gatsby - Home Page</title>;
