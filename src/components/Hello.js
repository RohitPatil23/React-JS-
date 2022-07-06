import React from "react";

 const Hello = () =>{
//     return(
//     <div className='dummyClass'>
//         <h1>Hello Rohit</h1>
//     </div>
//     )

return React.createElement('div',{id:'hello',className:'dummyName'},React.createElement('h1',null,'Hello Rohit'))
 }

export default Hello