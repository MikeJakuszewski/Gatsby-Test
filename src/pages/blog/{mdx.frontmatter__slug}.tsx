import * as React from "react";
import { graphql } from "gatsby";
import { BlogSlugProps } from "../../interfaces/interface";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const BlogPost = ({ data, children }: BlogSlugProps) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }: BlogSlugProps) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
