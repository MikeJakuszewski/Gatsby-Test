import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Title } from "../interfaces/interface";
import { DataStructure } from "../interfaces/interface";

const BlogPage = ({ data }: DataStructure) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
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
