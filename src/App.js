
import { getUser } from "./Utilities/user-service";
import { useState } from "react";
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
