import React from 'react'

//Event Handling in function component 

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }
  return (
    <div> 
    <button onClick={clickHandler}>Click</button> 
    </div>
  )
}
//event handler is a function (clickHandler) and not a function call (clickHandler())
export default FunctionClick