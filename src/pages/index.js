import React from "react"
import "../styles/index.scss"
import "@fortawesome/fontawesome-free/css/all.css"
import Header from "../components/Header"
import About from "../components/About"
import Footer from "../components/Footer"
import Experience from "../components/Experience"
import Projects from "../components/Projects"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  )
}

export default IndexPage
