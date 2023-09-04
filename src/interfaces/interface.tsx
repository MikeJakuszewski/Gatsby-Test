export interface Title {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export interface DataStructure {
  data: {
    allMdx: {
      nodes: Array<{
        excerpt: string;
        frontmatter: { date: string; title: string };
        id: string;
      }>;
    };
  };
}
