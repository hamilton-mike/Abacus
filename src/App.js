import logo from "./logo.svg";
import "./App.css";
import { getUser } from "./Utilities/user-service";
import { useState } from "react";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      <header className="App-header">
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
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </header>
    </div>
  );
}

export default App;
