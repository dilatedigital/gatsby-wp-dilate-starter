import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../../utils/flatListToHierarchical"
import { SiteContext } from "../../context/SiteContext"
import Close from "../../assets/close.svg"
import MobileMenuLi from "./MobileMenuLi"
import {
  mobileMenuContainer,
  closeBtnContainer,
  mobileMenuUl,
  mobileMenuActive,
  mobileMenuInactive,
} from "../../styles/header.module.css"

const MobileMenu = ({ menu }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  menuItems.forEach((menuItem, index) => {
    menuItem.id = index
  })

  const [active, setActive] = useState(new Array(menuItems.length).fill(false))

  const { isMenuOpen, toggleMenu } = useContext(SiteContext)

  return (
    <div
      className={`${mobileMenuContainer} ${
        isMenuOpen ? mobileMenuActive : mobileMenuInactive
      }`}
    >
      <div className={closeBtnContainer}>
        <button onClick={toggleMenu} aria-label="Close">
          <Close />
        </button>
      </div>
      <ul className={mobileMenuUl}>
        {menuItems.map(menuItem => {
          return (
            <MobileMenuLi
              key={menuItem.key}
              menuItem={menuItem}
              toggleMenu={toggleMenu}
              onClick={setActive}
              isOpen={active[menuItem.id]}
              totalMenuItems={menuItems.length}
            />
          )
        })}
      </ul>
    </div>
  )
}

MobileMenu.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default MobileMenu
