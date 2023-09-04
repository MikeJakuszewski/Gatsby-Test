import * as React from "react";
import { Link } from "gatsby";
import "../pages/styles.scss";

interface Props {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: Props) => {
  return (
    <div className="test">
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
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
