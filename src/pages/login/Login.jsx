import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

import Notification from "../../components/Notification/Notification";

import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordTypeChange = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // prevent errors before submission
    if (!email.includes("@") || !email.includes(".")) {
      return setErrorMessage("Email is not valid!");
    }
    if (password.length < 7) {
      return setErrorMessage("Password length should be at least 8 characters");
    }
    console.log("Password: ", password, "Email: ", email);
    try {
      const { status, token, user } = await (
        await fetch(`http://localhost:8000/api/v1/user/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        })
      ).json();
      if (status === "success") {
        localStorage.setItem("token", JSON.stringify(token));
        dispatch(setUser(user));
        console.log("token: ",token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // "https://images.unsplash.com/photo-1557222110-ca841d4b0dc8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // if checked button is checked, save token in local storage

  return (
    <>
      <Notification message={errorMessage} />
      <div className="flex items-center justify-center h-screen ">
        <div className="w-96 border p-4 rounded-md shadow">
          <h3 className="text-2xl font-bold mb-2 text-center">Log in</h3>
          <p className="text-sm text-slate-600 text-center">
            Sign in to find your next comfortable stay.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold"
              >
                Enter your email:
              </label>
              <br />
              <div className="relative">
                <input
                  type="email"
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="email@example.com"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter your secure password:
              </label>
              <div className="relative">
                <input
                  type={passwordType}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="*******************"
                  required
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={handlePasswordTypeChange}
                >
                  {passwordType === "password" ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
            {/* checkbox */}
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  // checked={isChecked}
                  // onChange={handleCheckboxChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              <p className="ml-2 text-gray-900 cursor-pointer">
                Forgot password?
              </p>
            </div>
            <Button
              fullWidth
              className="rounded-full"
              color="red"
              type="submit"
            >
              Submit
            </Button>
          </form>

          <div className="flex items-baseline gap-2 my-4">
            <div className="line" /> <span className="text-gray-700">or</span>{" "}
            <div className="line" />
          </div>

          {/* Google sign in */}
          <div className="flex justify-around">
            <Button color="red" className="rounded-full px-8">
              <i className="fa-brands fa-google"></i>
            </Button>
            <Button color="blue" className="rounded-full px-8">
              <i className="fa-brands fa-facebook"></i>
            </Button>
            <Button color="blue-gray" className="rounded-full px-8">
              <i className="fa-brands fa-x-twitter"></i>
            </Button>
          </div>
          <div className="mt-8 text-center text-gray-700">
            <p>Don't have an account yet? Sign up now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
