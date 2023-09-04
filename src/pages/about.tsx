import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const About = () => {
  return (
    <main>
      <Layout pageTitle="About Page">
        <h4>About Me</h4>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </main>
  );
};

export const Head: HeadFC = () => <Seo title="About Me" />;

export default About;
