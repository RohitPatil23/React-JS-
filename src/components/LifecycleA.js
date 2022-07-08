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
  changeState=()=>{
    this.setState({
        name : 'changeState'
    })
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("LifecycleA getSnapshotBeforeUpdate");
   return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
