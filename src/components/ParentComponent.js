import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }
 
  //Defined a method 
  greetParent(childName){
    //alert('Hello' + this.state.parentName)
    alert(`Hello ${this.state.parentName} from ${childName}`)
}

//On child component tag pass the method as a prop 
    render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent