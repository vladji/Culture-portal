import React from "react"
import PropTypes from "prop-types"
import Navigation from "./navigation/navigation"
import Container from "react-bootstrap/Container"

const getLang = ({ pathname }) => {
  const pathArr = pathname.split('/')
  const currentLang = pathArr.length - 1;
  return pathArr[currentLang]
}

const Layout = ({ children, location }) => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header>
        <Navigation lang={getLang(location)} location={location} />
      </header>
      <div className="container-fluid d-flex flex-column flex-grow-1">
        <main className="flex-grow-1">{children}</main>
        <footer>
          <div className="text-center p-2">
            © Songbirds Team {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
