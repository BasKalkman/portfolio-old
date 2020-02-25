import React from "react"

export default function ProjectCard(props) {
  /*
    props: image, title, content, links
    */

  const { image, name, text, links } = props.project

  // TODO: Fix links to demos
  return (
    <div className="project-card">
      <div className="project-card__image-box">
        <img src={image} alt={name} className="project-card__image" />
      </div>
      <div className="project-card__content-box">
        <h3 className="heading">{name}</h3>
        <div className="project-card__content">{text}</div>
        <div className="project-card__links">
          {links.map((e, i) => {
            return (
              <a
                href={e.href}
                className="project-card__link"
                key={i.toString()}
              >
                {e.text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
