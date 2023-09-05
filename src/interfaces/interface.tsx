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
        frontmatter: { date: string; title: string; slug: string };
        id: string;
      }>;
    };
  };
}

export interface BlogSlugProps {
  data: {
    mdx: {
      frontmatter: { date?: string; title: string };
    };
  };
  children: React.ReactNode;
}
