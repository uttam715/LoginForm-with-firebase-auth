import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState({ email: "", password: "" });

   const navigation = useNavigate();
   async function handleOnClick() {
    if (!loginUser.email.trim() || !loginUser.password.trim()) return;
    navigation("/home");
    try {
      await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password);
      alert("Logged in!");
    } catch (err) {
      alert(err.message);
    }
  }
  function handleOnChange(e, placeholder) {
    switch (placeholder) {
      case "Email":
        setLoginUser({ ...loginUser, email: e.target.value });
        if (!e.target.value.trim()) {
          setLoginError({ ...loginError, email: "required" });
        } else {
          setLoginError({ ...loginError, email: "" });
        }
        break;
      case "Password":
        setLoginUser({ ...loginUser, password: e.target.value });
        if (!e.target.value.trim()) {
          setLoginError({ ...loginError, password: "required" });
        } else {
          setLoginError({ ...loginError, password: "" });
        }
        break;
      default:
        break;
    }
  }
  return (
    <section className="align-middle d-flex justify-content-center pb-4 mt-5">
      <div className="border rounded-5 w-50">
        <section className="p-4 text-center mb-4">
          <div className="container d-flex flex-column">
            <form>
              <h3>Login</h3>

              <div className="position-relative">
                <span className="bg-danger bg-opacity-25 border float-end mb-1 pe-2 ps-2 rounded-3 text-danger">
                  {loginError.email}
                </span>
                <Input
                  placeholder="Email"
                  type="email"
                  id="form2Example1"
                  className="form-control"
                  value={loginUser.email}
                  handleOnChange={handleOnChange}
                />
              </div>

              <div className="position-relative">
                <span className="bg-danger bg-opacity-25 border float-end mb-1 pe-2 ps-2 rounded-3 text-danger">
                  {loginError.password}
                </span>
                <Input
                  placeholder="Password"
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  value={loginUser.password}
                  handleOnChange={handleOnChange}
                />
              </div>

              <Button value="Sign In" handleOnClick={handleOnClick} />
              <div className="text-center mt-2">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}
