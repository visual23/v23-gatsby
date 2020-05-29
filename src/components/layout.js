import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { documentModifier } from '../helpers/utilities';
import Header from "./header"
import Heart from "../images/heart.inline.svg";

const Layout = ({ children, bodyClasses}) => {

  documentModifier('body', 'class', bodyClasses);
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header pageInfo="test" siteTitle={data.site.siteMetadata.title} />
          <main className="content-wrapper">{children}</main>
          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright">
                    <span>© {new Date().getFullYear()} Visual23 - Built with <Heart/> in Asheville</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="email">
                    <a href="mailto:hello@visual23.com">hello@visual23.com</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    />
  );
};

Layout.defaultProps = {
  bodyClasses: '',
};

Layout.propTypes = {
  /**
   * An optional title prepended to ` | FullStory`
   */
  pageTitle: PropTypes.string,
  /**
   * Overrides the main site meta description
   */
  metaDescription: PropTypes.string,
  /**
   * Overrides the main site og image src url
   */
  ogImage: PropTypes.string,
  /**
   * CSS classes applied to the body
   */
  bodyClasses: PropTypes.string,
  /**
   * Passes body class as prop
   */
  children: PropTypes.node.isRequired,
};

export default Layout;