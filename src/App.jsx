import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Profile from "./Profile";
import Body from "./Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          {/* Parent */}
          <Route path="/" element={<Body />}>
            {/* Children  (The childrens will be loaded in the outlet in the body,jsx) */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// Routes

// Routes = / => Feed
// Routes = /login => login
// Routes = /connections => connections
// Routes = /profile => profile
