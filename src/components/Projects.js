import React, { Component } from "react"
import ProjectCard from "./ProjectCard"

const projects = [
  {
    name: "Advent of Code",
    image: "advent-small.jpg",
    text:
      "A yearly series of coding challenges. Solutions written in Javascript / Node. Links to repository on GitHub.",
    links: [
      { text: "2016", href: "https://github.com/BasKalkman/Advent2016" },
      { text: "2017", href: "https://github.com/BasKalkman/Advent2017" },
      { text: "2018", href: "https://github.com/BasKalkman/Advent2018" },
      { text: "2019", href: "https://github.com/BasKalkman/AdventOfCode2019" },
    ],
  },
  {
    name: "Trillo",
    image: "trillo-small.jpg",
    text:
      "A fictional booking site, created as part of an SCSS course with a particular focus on flexbox",
    links: [{ text: "Demo", href: "/trillo" }],
  },
  {
    name: "Color Guesser",
    image: "color-guesser-small.jpg",
    text:
      "One of the first games made as part of a Udemy course. The Webdeveloper Bootcamp.",
    links: [
      { text: "Demo", href: "/color-guesser" },
      { text: "Github", href: "https://github.com/BasKalkman/colorguesser" },
    ],
  },
  {
    name: "Color Picker",
    image: "color-picker-small.jpg",
    text:
      "A riff on the Color Guesser project, mixed with an Android app store game. Created to put exercises from a previous course into practice.",
    links: [
      { text: "Demo", href: "/color-picker" },
      { text: "Github", href: "https://github.com/BasKalkman/color-picker" },
    ],
  },
  {
    name: "Memory",
    image: "memory-small.jpg",
    text:
      "A small, though very difficult, game of memory. Started just to practice the card flip effect, but grew into a full game of memory.",
    links: [
      { text: "Demo", href: "/memory" },
      { text: "Github", href: "https://github.com/BasKalkman/Memory" },
    ],
  },
  {
    name: "Natours",
    image: "natours-small.jpg",
    text: "Created as part of an SCSS course. ",
    links: [{ text: "Demo", href: "/natours" }],
  },
  {
    name: "Rally matching",
    image: "rally-small.jpg",
    text:
      "Automatically create seating arrangements for a rally. Built with Bootstrap, MongoDB and NodeJS",
    links: [
      { text: "GitHub", href: "https://github.com/BasKalkman/rallylijst" },
    ],
  },
  {
    name: "Customer portal",
    image: "mijnps-small.jpg",
    text:
      "Customer portal for matching agency. Customer can manage their own profile and respond to message and introductions. Built with VueJS",
    links: [],
  },
]

export default class Projects extends Component {
  render() {
    return (
      <div className="section-projects">
        <h2 className="projects__heading">Projects</h2>
        <div className="projects">
          {projects.map(e => {
            return <ProjectCard project={e} />
          })}
        </div>
      </div>
    )
  }
}
