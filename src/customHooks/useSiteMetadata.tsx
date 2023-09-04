import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export interface Title {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
