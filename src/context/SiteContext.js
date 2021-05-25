import React, { useState, createContext } from "react"

export const SiteContext = createContext({
  isMenuOpen: false,
  setMenuOpen: () => {},
})

export default props => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen(!isMenuOpen)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <SiteContext.Provider
      value={{ isMenuOpen, toggleMenu, openModal, closeModal, isModalOpen }}
    >
      {props.children}
    </SiteContext.Provider>
  )
}
