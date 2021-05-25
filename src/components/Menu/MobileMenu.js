import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../../utils/flatListToHierarchical"
import { SiteContext } from "../../context/SiteContext"
import Close from "../../assets/close.svg"
import MobileMenuLi from "./MobileMenuLi"

const MobileMenu = ({ menu }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  let menuDefaults = {}

  menuItems.forEach(item => {
    if (item.children.length > 0) {
      menuDefaults[item.title] = false
    }
  })

  const { isMenuOpen, toggleMenu } = useContext(SiteContext)
  const [menuStatus, setMenuStatus] = useState(menuDefaults)

  return (
    <div
      className={`h-full top-0 fixed bg-white z-40 w-full xl:hidden transform p-4 transition overflow-scroll ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <button onClick={toggleMenu} aria-label="Close">
          <Close />
        </button>
      </div>
      <ul className="mt-70px max-w-290px ml-14 relative z-10">
        {menuItems.map(menuItem => {
          return (
            <MobileMenuLi
              menuItem={menuItem}
              toggleMenu={toggleMenu}
              status={menuStatus}
              setStatus={setMenuStatus}
              defaults={menuDefaults}
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
