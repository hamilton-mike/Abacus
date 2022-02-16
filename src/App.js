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
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </header>
    </div>
  );
}

export default App;
