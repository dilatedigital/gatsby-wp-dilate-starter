import React from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../../utils/flatListToHierarchical"
import UniversalLink from "../../utils/UniversalLink"
import ArrowDown from "../../assets/arrow-down.svg"
import {
  mainMenu,
  mainMenuItem,
  submenu,
  menuArrowDown,
} from "../../styles/header.module.css"

const Menu = ({ menu }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  //console.log(menuItems)

  return (
    <ul className={mainMenu}>
      {menuItems.map(menuItem => {
        return (
          <li key={menuItem.key} className={mainMenuItem}>
            <UniversalLink
              to={
                menuItem.connectedNode
                  ? menuItem.connectedNode.node.uri
                  : menuItem.url
              }
            >
              {menuItem.title}
            </UniversalLink>

            {menuItem.children.length > 0 && (
              <ArrowDown className={menuArrowDown} />
            )}
            {menuItem.children.length > 0 && (
              <ul className={submenu}>
                {menuItem.children.map(subItem => {
                  return (
                    <li
                      key={subItem.key}
                      className="py-2 px-4 w-full hover:bg-light-grey"
                    >
                      <UniversalLink
                        to={subItem.url}
                        className="font-pop text-ct-black"
                      >
                        {subItem.title}
                      </UniversalLink>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default Menu
