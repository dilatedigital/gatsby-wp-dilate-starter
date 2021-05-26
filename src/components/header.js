import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Logo from "../assets/logo.svg"
import Burger from "../assets/burger.svg"
import Menu from "./Menu/Menu"
import { SiteContext } from "../context/SiteContext"
import MobileMenu from "./Menu/MobileMenu"
import {
  header,
  header__flexWrapper,
  header__logo,
  menuBtn,
} from "../styles/header.module.css"

const Header = () => {
  const { toggleMenu } = useContext(SiteContext)

  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            key: id
            title: label
            connectedNode {
              node {
                uri
              }
            }
            parentId
            url
          }
        }
      }
    }
  `)

  return (
    <header className={header}>
      <div className="container-lg">
        <div className={header__flexWrapper}>
          <Link to="/" className="" aria-label="Dilate Logo">
            <Logo className={header__logo} />
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              aria-label="Open Mobile Menu"
              className={menuBtn}
            >
              <Burger className="fill-current text-white" />
            </button>
            {wpMenu ? (
              <Menu menu={wpMenu} />
            ) : (
              "Please configure your main menu."
            )}
          </div>
        </div>
      </div>
      <MobileMenu menu={wpMenu} />
    </header>
  )
}

export default Header
