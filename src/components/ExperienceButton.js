import React from "react"

export default function ExperienceButton(props) {
  const { iconClass, tech } = props.item

  return (
    <div>
      <div className="exp-button__container">
        <div className="exp-button__button">
          <i className={iconClass} />
        </div>
        <span className="exp-button__subtext">{tech}</span>
      </div>
    </div>
  )
}
