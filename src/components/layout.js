/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import { SiteContext } from "../context/SiteContext"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const { isMenuOpen, isModalOpen } = useContext(SiteContext)
  return (
    <>
      <Helmet
        bodyAttributes={{ class: isMenuOpen || isModalOpen ? "menu-open" : "" }}
      />
      <div className={`flex flex-col min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
