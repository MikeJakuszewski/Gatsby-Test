import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import useSiteMetadata, { Title } from "../customHooks/useSiteMetadata";
import { log } from "console";

interface DataStructure {
  data: {
    allFile: {
      nodes: Array<{ name: string }>;
    };
  };
}

const BlogPage = ({ data }: DataStructure) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Head = ({ data }: Title) => (
  <Seo title={data.site.siteMetadata.title} />
);

export default BlogPage;
