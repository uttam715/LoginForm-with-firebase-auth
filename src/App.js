import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Home from "./components/Home.jsx";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
