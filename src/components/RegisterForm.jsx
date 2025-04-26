import Input from "../atoms/Input.jsx";
import Button from "../atoms/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/actions.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.jsx";
import { setDoc, doc } from "firebase/firestore";

export default function RegisterForm() {
  const navigation = useNavigate();
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [inputError, setInputError] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const dispatch = useDispatch();

  async function handleOnClick() {
    // Make sure all fields are filled
    if (
      !registerUser.email.trim() ||
      !registerUser.name.trim() ||
      !registerUser.password.trim() ||
      !registerUser.phone.trim()
    ) {
      return;
    }

    dispatch(setUser(registerUser)); // Store user info in Redux if needed
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerUser.email,
        registerUser.password
      );
      const user = userCredential.user;

      // After successful sign-up, save additional user data (name, phone) to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: registerUser.name,
        phone: registerUser.phone,
        email: registerUser.email,
        createdAt: new Date(),
      });

      alert("Sign-up successful!");
      navigation("/"); // Redirect to the login page after successful sign-up
    } catch (err) {
      alert(err.message); // Handle any sign-up errors
    }
  }

  function handleOnChange(e, placeholder) {
    // Handle input changes and errors
    switch (placeholder) {
      case "Full Name":
        setRegisterUser({ ...registerUser, name: e.target.value });
        if (!e.target.value.trim()) {
          setInputError({ ...inputError, name: "required" });
        } else {
          setInputError({ ...inputError, name: "" });
        }
        break;
      case "Email":
        setRegisterUser({ ...registerUser, email: e.target.value });
        if (!e.target.value.trim()) {
          setInputError({ ...inputError, email: "required" });
        } else {
          setInputError({ ...inputError, email: "" });
        }
        break;
      case "Phone":
        setRegisterUser({ ...registerUser, phone: e.target.value });
        if (!e.target.value.trim()) {
          setInputError({ ...inputError, phone: "required" });
        } else {
          setInputError({ ...inputError, phone: "" });
        }
        break;
      case "Password":
        setRegisterUser({ ...registerUser, password: e.target.value });
        if (!e.target.value.trim()) {
          setInputError({ ...inputError, password: "required" });
        } else {
          setInputError({ ...inputError, password: "" });
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
          <div className="container d-flex flex-column ">
            <form>
              <h3 className="mb-4">Register</h3>

              <div className="position-relative">
                <span className="bg-danger bg-opacity-25 border float-end mb-1 pe-2 ps-2 rounded-3 text-danger">
                  {inputError.name}
                </span>
                <Input
                  placeholder="Full Name"
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  handleOnChange={handleOnChange}
                  value={registerUser.name}
                />
              </div>
              <div>
                <span className="bg-danger bg-opacity-25 border float-end mb-1 pe-2 ps-2 rounded-3 text-danger">
                  {inputError.email}
                </span>

                <Input
                  placeholder="Email"
                  required
                  type="email"
                  id="form2Example2"
                  className="form-control"
                  handleOnChange={handleOnChange}
                  value={registerUser.email}
                />
              </div>
              <div>
                <span className="bg-danger bg-opacity-25 border float-end mb-1 pe-2 ps-2 rounded-3 text-danger">
                  {inputError.password}
                </span>
                <Input
                  placeholder="Password"
                  type="password"
                  id="form2Example3"
                  className="form-control"
                  handleOnChange={handleOnChange}
                  value={registerUser.password}
                />
              </div>

              <div>
                <span className="bg-danger bg-opacity-25 border float-end mb-1 pe-2 ps-2 rounded-3 text-danger">
                  {inputError.phone}
                </span>
                <Input
                  placeholder="Phone"
                  type="text"
                  id="form2Example5"
                  className="form-control"
                  handleOnChange={handleOnChange}
                  value={registerUser.phone}
                />
              </div>

              <Button value="Register" handleOnClick={handleOnClick} />
              <div className="text-center mt-2">
                <p>
                  Already a member? <Link to="/">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}
