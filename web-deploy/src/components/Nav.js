import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

export default function Nav() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Projects"> Projects</Link>
      </div>
    </nav>
  );
}
