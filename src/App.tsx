import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Dogs from "./pages/Dogs/Dogs";
import TaskApp from "./pages/TaskApp/TaskApp";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute"; // Component for cheching is user is Looged
import { AuthProvider } from "./contexts/AuthContext"; // Context for for checking if user is logged in

function App() {
  return (
    <>
      <AuthProvider>
        <Nav />
        <div className="PageComponent">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route element={<PrivateRoute />}>
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
