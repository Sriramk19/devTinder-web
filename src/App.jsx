import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            {/* Parent */}
            <Route path="/" element={<Body />}>
              {/* Children  (The childrens will be loaded in the outlet in the body,jsx) */}
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

// Routes

// Routes = / => Feed
// Routes = /login => login
// Routes = /connections => connections
// Routes = /profile => profile
