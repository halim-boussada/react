import React, { Component } from "react";

class ClassExmple extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc.bind(this)}>inc</button>
      </div>
    );
  }
}

export default ClassExmple;
