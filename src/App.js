//import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import PersonList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.modules.css";
import Form from "./components/Form"
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
     <Table />

     {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
       {/* <Form /> */}
        {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>success</h1> */}

        {/* <Inline /> */}
        {/* <Stylesheet primary={false}/> */}
        {/* <PersonList /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
    <ClassClick /> */}

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman"/>
      

     
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diane" heroName="Wonder Woman"/>


      <Hello />

      <Message />

      <Counter /> */}
        {/* <Greet name="Diane" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"/> */}
      </div>
    );
  }
}

export default App;
