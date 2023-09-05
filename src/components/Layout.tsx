import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import useSiteMetadata from "../customHooks/useSiteMetadata";
import "../pages/styles.scss";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useSiteMetadata();

  return (
    <div className="test">
      <div className="top">
        <header className="site-title">{data.title}</header>
        <nav>
          <ul className="nav-links ">
            <li className="nav-link-item">
              <Link to="/" className="nav-link-text">
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/about" className="nav-link-text">
                About
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/blog" className="nav-link-text">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
