import React from "react"
import "../styles/index.scss"
import "@fortawesome/fontawesome-free/css/all.css"

import HeaderTop from "../components/HeaderTop"
import About from "../components/About"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Projects from "../components/Projects"

const IndexPage = () => {
  return (
    <div>
      <HeaderTop />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default IndexPage
