import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Dogs from "./components/Dogs/Dogs";
import TaskApp from "./components/TaskApp/TaskApp";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Nav />
        {/* <Login /> */}
        <div className="PageComponent">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateRoute />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/home" element={<Home />} />
              <Route path="/dogs" element={<Dogs />} />
              <Route path="/link2" element={<TaskApp />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
