import React, { Component } from "react"
import ExperienceButton from "./ExperienceButton"
import { Helmet } from "react-helmet"

const items = [
  {
    tech: "HTML5",
    iconClass: "fab fa-html5",
  },
  {
    tech: "CSS3",
    iconClass: "fab fa-css3-alt",
  },
  {
    tech: "JavaScript",
    iconClass: "fab fa-js",
  },
  {
    tech: "Sass",
    iconClass: "fab fa-sass",
  },
  {
    tech: "NodeJS",
    iconClass: "fab fa-node-js",
  },
  {
    tech: "React",
    iconClass: "fab fa-react",
  },
  {
    tech: "Vue",
    iconClass: "fab fa-vuejs",
  },
  {
    tech: "PHP",
    iconClass: "fab fa-php",
  },
  {
    tech: "Git",
    iconClass: "icon-git",
  },
  {
    tech: "GitHub",
    iconClass: "fab fa-github",
  },
  {
    tech: "NPM",
    iconClass: "fab fa-npm",
  },
  {
    tech: "MongoDB",
    iconClass: "icon-mongodb",
  },
  {
    tech: "PostgresQL",
    iconClass: "icon-postgres",
  },
]

export default class Experience extends Component {
  render() {
    return (
      <div className="section-experience">
        <h2 className="heading">Experience</h2>
        <div className="experience">
          <Helmet>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.4.1/font-mfizz.min.css"
            />
          </Helmet>
          {items.map(e => (
            <ExperienceButton item={e} />
          ))}
        </div>
      </div>
    )
  }
}
