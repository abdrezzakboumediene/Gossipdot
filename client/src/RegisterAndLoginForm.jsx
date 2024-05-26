import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import Logo from "./Logo.jsx";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center flex-col justify-center bg-gradient-to-tl from-blue-300 via-sky-100 to-transparent">
      <Logo />
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-md p-2 mb-2 drop-shadow-[3px_5px_20px_rgba(86,86,186,0.1)]"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-md p-2 mb-2 drop-shadow-[3px_5px_20px_rgba(86,86,186,0.1)]"
        />
        <button className="bg-blue-500 text-white block w-full rounded-md p-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 shadow-xl shadow-blue-500/50">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
        <div className="text-center mt-2 text-blue-800">
          {isLoginOrRegister === "register" && (
            <div>
              Already a member?
              <button
                className="ml-1"
                onClick={() => setIsLoginOrRegister("login")}
              >
                Login here
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Dont have an account?
              <button
                className="ml-1"
                onClick={() => setIsLoginOrRegister("register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
