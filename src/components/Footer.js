import React from "react"

const Footer = () => {
  return (
    <footer>
      &copy;
      {` ${new Date().getFullYear()}. Dilate Gatsby-WordPress Starter. All Rights Reserved.`}
    </footer>
  )
}

export default Footer
