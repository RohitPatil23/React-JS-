import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rohit",
    };
    console.log("Lifecycle constructor");
  }

  static getDerivedStaterFormProps(props, state) {
    console.log("LifecycleB getDerivedStaterFormProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }
  render() {
    console.log("LifecycleB render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
