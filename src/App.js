//import logo from './logo.svg';
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

function App() {
  return (
    <div className="App">
      <UserGreeting />
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

export default App;
