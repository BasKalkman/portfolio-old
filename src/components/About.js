import React from "react"
import profilePic from "../images/profielfoto-small.jpeg"

export default function About() {
  return (
    <div className="about">
      <div className="about__text">
        <h2 className="heading">About Me</h2>
        Curious and involved. I like to be aware of work and concerns outside my
        own scope in order to do my job better and facilitate others with
        theirs. Capable of switching gears quickly and turn ideas into actions.
      </div>
      <div>
        <img src={profilePic} alt="Profielfoto Bas" className="about__image" />
      </div>
    </div>
  )
}
