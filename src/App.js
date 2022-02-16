import "./App.css";
import { getUser } from "./Utilities/user-service";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import AccountPage from "./Pages/AccountDetails/AccountPage";
import SettingsPage from "./Pages/SettingsPage/Settings";
import AuthPage from "./Pages/AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route
        path="/signup"
        element={<AuthPage setUser={setUser} user={user} />}
      />
    </Routes>
  );
}

export default App;
