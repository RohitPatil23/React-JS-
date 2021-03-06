import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana","Bruce"];
  const NameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>);
  return <div>{NameList}</div>;
}

// function PersonList() {
//   const persons = [
//     { id: 1, name: "Bruce", age: 30, skill: "React" },
//     { id: 2, name: "Clark", age: 25, skill: "Angular" },
//     { id: 3, name: "Diana", age: 28, skill: "Vue" },
//   ];
//   // person as a parameter which is passed as the prop to the person component
//   //Each child in a list should have a unique "key" prop
//   const PersonList = persons.map((person) => (
//     <Person key={person.id} person={person}></Person>
//   ));
//   return <div>{PersonList}</div>;
// }

// export default PersonList;

export default NameList;
