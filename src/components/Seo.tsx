import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import useSiteMetadata from "../customHooks/useSiteMetadata";

interface Props {
  title: string;
}

const Seo = ({ title }: Props) => {
  const data = useSiteMetadata();

  return (
    <title>
      {title} | {data.title}
    </title>
  );
};
export default Seo;
