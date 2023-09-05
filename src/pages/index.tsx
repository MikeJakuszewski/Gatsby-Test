import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h4>Welcome to my Gatsby site!</h4>
        <div className="image-container">
          <StaticImage
            class="img"
            src="../assets/Howells.jpeg"
            alt="Couple with Dog"
          />

          <StaticImage class="img" src="../assets/Bills.png" alt="Bills" />
        </div>
      </Layout>
    </main>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home Page" />;
