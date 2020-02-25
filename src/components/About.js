import React from "react"
import profilePic from "../images/profielfoto-small.jpeg"

export default function About() {
  return (
    <div className="about">
      <div className="about__text">
        <h2 className="heading">About Me</h2>
        <p>The first website I ever built, at 12 years old, was of course on Geocities. The efforts were thoroughly enjoyable and, though fairly embarrassing, tied up the phoneline something fierce.</p>
        <p>A lot has changed since then and I've dived back into learning web development. Including the back-end stuff this time. It's still as enjoyable as it was back then. There's just many more possibilities</p>
      </div>
      <div>
        <img src={profilePic} alt="Profielfoto Bas" className="about__image" />
      </div>
    </div>
  )
}
