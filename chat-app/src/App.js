import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route
                path="/Rooms/:roomId"
                element={
                  <>
                    <Chat />
                  </>
                }
              />

              {/* <Route path="/app" element={<Chat />} /> */}
              {/* <Sidebar />
              <Chat /> */}
            </Routes>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Chat />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
