import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //4.Short circuit operator(the expression first evaluates the left hand side of the operator if it is true it also evaluates the right hand side which in our case is the JSX that will be render in the browser however if left hand evaluates to false the right hand side will never be evaluated as it doesn't affect the final value of the whole expression(nothing is render in browser))
    return this.state.isLoggedIn && <div>Welcome Rohit </div>;

    //3.ternary Conditional Operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Rohit</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //2.Element Variable (Here we declare element variable as message)
    // let message //message is the variable which stores the element to be rendered
    // if (this.state.isLoggedin) {
    //       message = <div>Welcome Rohit</div>;
    //     } else {
    //       message = <div>Welcome Guest</div>;
    //     }
    // return (
    //     <div>{message}</div>
    // )

    //1.if/else
    // if (this.state.isLoggedin) {
    //   return <div>Welcome Rohit</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Rohit</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
