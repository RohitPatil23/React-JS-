import React, { Component } from 'react'

class EventBind extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         message :'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }
        //3.Binding in Class constructor
    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    // }
  
    //binding using class property as arrow function 
    clickHandler = () => {
        this.setState({
            message:'GoodBye!'
        })
    }

    render() {
    return (
      <div>
      <div>{this.state.message}</div>
      {/* 1.Binding in render method  (not use because of performance implications )
       <button onClick={this.clickHandler.bind(this)}>Click</button>  */}

      {/* 2.Binding using arrow function in render method 
        <button onClick={()=> this.clickHandler()}>Click</button>  */}
       
        {/* 3.Binding in Class constructor (Binding happens once in the constructor this is better compared to binding in the render method) */}
        <button onClick={this.clickHandler}>Click</button> 
      </div>
    )
  }
}
//this.clickHandler is undefined (this keyword within our event handler is undefined this is typical behavior in JavaScript ) 

export default EventBind