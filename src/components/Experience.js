import React, { Component } from "react"
import ExperienceButton from "./ExperienceButton"

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
          {items.map(e => (
            <ExperienceButton item={e} />
          ))}
        </div>
      </div>
    )
  }
}
