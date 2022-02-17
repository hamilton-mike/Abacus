# Abacus f/k/a Saving for Shuffleboard

Welcome to Abacus, the friendly retirement savings app!

![Abacus Logo](/src/imgs/abacus_logo.png)


## __Conceptual Screenshots__
##### Abacus Sign In Page
![Abacus Sign In Page](/src/imgs/abacus_signup.png)

##### Abacus Home Page
![Abacus Home Page](/src/imgs/abacus_home.png)

##### Abacus Info Page
![Abacus Info Page](/src/imgs/abacus_info.png)


## __Sample Code__
##### App.js
```js
  return (
    <div className="App">
      <img id="abacus-logo" src={Logo} />
      <header className="App-header">
        {logIn ? (
          <>
            <div className="hi">
              <SignUp />
              <button onClick={toggle}>Already a Member?</button>
            </div>
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
```

##### index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import AccountPage from './Pages/AccountPage';
import EducationPage from './Pages/Education';
import CalculatorPage from './Pages/Calculator';


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/education' element={<EducationPage />} />
      <Route path='/calculator' element={<CalculatorPage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
```

##### SignUp.jsx
```js
import React from 'react'
import { InputStyle, BtnStyle, BG, Dblock , LabelStyle} from "./SignUpFormStyles.js";


const SignUp = () => {
  return (
    <>
        <Dblock>
            <div>
                <LabelStyle htmlFor="uname">Username</LabelStyle>
                <InputStyle type="text" placeholder='Username' required name='uname'/>
            </div>

            <div>
                <LabelStyle htmlFor="pw">Password</LabelStyle>
                <InputStyle type="password" placeholder='Password' required name='pw'/>
            </div>

            <div>
                <LabelStyle htmlFor="pw2">Confirm</LabelStyle>
                <InputStyle type="password" placeholder='Confirm Password' required name='pw2'/>
                <InputStyle type="submit" value="Register" />
            </div>
        </Dblock>
    </>
  )
}

export default SignUp
```

## __Technologies__
* CSS
* Express
* Heroku
* Mongoose
* Node
* React


## __Resources__
Click the following hyperlink to view Abacus:
* [Abacus](https://abacus-ga.netlify.app/)

Abacus Trello Board:
* [Trello Board](https://trello.com/b/fMiPZsq8/golden-lords-planning-board)

Abacus Figma Board:
* [Figma Board](https://www.figma.com/file/L5ZeJBoU5zs7rulbBwwGof/budget?node-id=6%3A12)


## __Future Enhancements__
* Enable user functionality for entering transactions
* Transfer of money between accounts for users
