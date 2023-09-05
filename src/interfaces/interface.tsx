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
      frontmatter: {
        date?: string;
        title: string;
        hero_image_alt: string;
        hero_image_credit_link: string;
        hero_image_credit_text: string;
        hero_image: any;
      };
    };
  };
  children: React.ReactNode;
}
