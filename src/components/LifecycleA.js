import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rohit",
    };
    console.log("Lifecycle constructor");
  }

  static getDerivedStaterFormProps(props, state) {
    console.log("LifecycleA getDerivedStaterFormProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  render() {
    console.log("LifecycleA render");
    return (<div>
        <div>Lifecycle A</div>
        <LifecycleB />
        </div>) 
  }
}

export default LifecycleA;
