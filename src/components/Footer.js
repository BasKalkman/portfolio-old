import React from "react"

export default function Footer() {
  return (
    <div className="footer">
      {new Date().getFullYear()} &mdash; Bas Kalkman &mdash; Built with Gatsby,
      React, SCSS
    </div>
  )
}
