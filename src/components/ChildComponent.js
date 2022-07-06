import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
       
    </div>
  )
}
//1.we have successfully called a method in the parent Component from a button in the child Component byPassing the method as props to child component  
//2.we have successfully passed a parameter from the child to parent 

// 1.In the parent Component Defined a method  
// 2.On child component tag pass the method as a prop 
// 3. in the child component access the method using the props object if at all you have to pass a parameter use the arrow function in tags

export default ChildComponent