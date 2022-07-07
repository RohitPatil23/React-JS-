import React from "react";

// function NameList() {
//   const names = ["Bruce", "Clark", "Diana"];
//   const NameList = names.map((name) => <h2>{name}</h2>);
//   return <div>{NameList}</div>;
// }

function PersonList() {
  const persons = [
   { id:1,
    name: 'Bruce',
    age: 30,
    skill: 'React'
   },
   { id:2,
    name: 'Clark',
    age: 25,
    skill: 'Angular'
   },
   { id:3,
    name: 'Diana',
    age: 28,
    skill: 'Vue'
   },
  ]
  const PersonList = persons.map(person => <h2>I am{person.name}. I am {person.age} years old. I know {person.skill} </h2>)
  return <div>{PersonList}</div>
  }


  export default PersonList



//export default NameList;
