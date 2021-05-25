import React from "react"
import SiteContextWrapper from "./src/context/SiteContext"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <SiteContextWrapper>{element}</SiteContextWrapper>
)
