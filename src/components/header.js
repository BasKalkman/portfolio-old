import React, { Component } from "react"

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollDepth: 0,
    }
  }

  watchScroll() {
    this.setState({
      scrollDepth: window.pageYOffset,
    })
  }

  componentDidMount() {
    this.scrollWatcher = window.addEventListener(
      "scroll",
      this.watchScroll.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(this.scrollWatcher)
  }

  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          Bas<span className="header__dot">.</span>
        </h1>

        {this.state.scrollDepth < 10 && <div className="header__scroll"></div>}
      </div>
    )
  }
}
