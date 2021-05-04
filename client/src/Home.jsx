import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      message: "Loading...",
    };
  }

  componentDidMount() {
    fetch("/api/home")
      .then((res) => res.text())
      .then((res) => this.setState({ message: res }));
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <p className="par">{this.state.message}</p>
      </div>
    );
  }
}
