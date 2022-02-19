import { useState } from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUp from './Components/SignUpForm/SignUp'
import Logo from "./imgs/abacus_logo.png";
import './App.css';

function App() {
  const [logIn, setLogIn] = useState(true);

  const toggle = () => {
    setLogIn(x => !x)
  }

  return (
    <div className="App">
      <img id="abacus-logo" src={Logo} />
      {logIn ? (
        <div className="hi">
          <SignUp />
          <span onClick={toggle}>Already a Member?</span>
        </div>
      ) : (
        <div className="hi">
          <LoginForm />
          <span onClick={toggle}>Not a Member?</span>
        </div>
      )}
    </div>
  );
}

export default App;
