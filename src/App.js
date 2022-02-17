import { getUser } from "./Utilities/user-service";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./Pages/AuthPage/AuthPage";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import Logo from "./imgs/abacus_logo.png";
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [logIn, setLogIn] = useState(true);

  const toggle = () => {
    setLogIn(x => !x)
  }

  return (
    <div className="App">
      <img id="abacus-logo" src={Logo} />
      <header className="App-header">
        {logIn ? (
          <>
            <SignUpForm setUser={setUser} />
            <button onClick={toggle}>Already a Member?</button>
          </>
        ) : (
          <>
            <LoginForm setUser={setUser} />
            <button onClick={toggle}>Dont Have an Account?</button>
          </>
        )}
      </header>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8c3f9" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;
