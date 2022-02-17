import { getUser } from "./Utilities/user-service";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import SettingsPage from "./Pages/Settings";
import AuthPage from "./Pages/AuthPage/AuthPage";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  const [user, setUser] = useState(getUser());
  const [logIn, setLogIn] = useState(true);

  const toggle = () => {
    setLogIn(x => !x)
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
