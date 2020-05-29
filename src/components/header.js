import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
//import { useEffect } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

// Assets
import LogoIcon from "../images/v-logo.inline.svg";
import LogoText from "../images/visual23.inline.svg";
import ColorModeIcon from "../images/color-mode-btn.inline.svg";

const Header = ({ siteTitle, children}) => {

// useEffect(() => {
//   console.log('at useEffect');
//   window.scrollTo(0, 0)
// }, [])

// componentDidMount() {
//     console.log('Mount Up!')
//     window.scrollTo(0, 0)
//   }

console.log("siteTitle = "+JSON.stringify(siteTitle))

  return (
    <>
      <header 
        className="site-header"
      >
        <div className="container">
          <div className="header-row">
            <Link
              to="/"
              className="logo"
            >
              <LogoIcon className="logo-icon" />
              <LogoText className="logo-text" />
            </Link>

            <ThemeToggler>
            {({ theme, toggleTheme }) => (
            <button className="color-mode-btn" type="button" aria-label="Toggle Light/Dark mode">
              <label>
              <ColorModeIcon />
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />{' '}
              </label>
              <div className="cool-ass-tooltip cool-ass-top"><span>Light / Dark</span></div>
              </button>
            )}
          </ThemeToggler>

          <Link className="toggle-menu open-it" to="/about/">
            <span className="burger-lines"></span>
            <div className="cool-ass-tooltip cool-ass-top"><span>About</span></div>
          </Link>

          <Link className="toggle-menu active close-it" to="/">
            <span className="burger-lines"></span>
          </Link>

          </div>  
        </div>
      </header>      
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageInfo: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
