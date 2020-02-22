import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation/navigation"

const Layout = ({ children, lang }) => {
  console.log('layout-props', lang);
  return (
    <>
      <div className="body-inner">
        <div className="bg-dark">
          <header className="content-wrapper">
            <Navigation langStore={lang} />
          </header>
        </div>
        <main>{children}</main>
      </div>
      <footer>
        <div className="content-wrapper">
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
