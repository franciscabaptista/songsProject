import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";

import { loginSucc, loginError } from "../redux/actions/actionCreators";

import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const usermail = useSelector((store) => store.user.email);
  const userpass = useSelector((store) => store.user.password);
  const usererror = useSelector((store) => store.user.error);

  useEffect(() => {
    if (usererror.length > 0) {
      toast.error(`${usererror}`);
      console.log("ss");
    }
  }, [usererror]);

  const handleEmail = (email) => {
    setEmail(email.target.value);
  };

  const handlePassword = (password) => {
    setPassword(password.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };

    if (email.length > 0 && password.length > 0) {
      dispatch(loginSucc(user));
    } else {
      dispatch(loginError("Invalido"));
    }
  };
  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="tituloLogin">Login</h1>
        <div className="loginInput">
          <label className="nomeInput">
            <b>Email</b>
          </label>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <label className="nomeInput">
            <b>Password</b>
          </label>
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button className="loginBotao" type="submit">
          <b> Iniciar Sessão</b>
        </button>
      </form>
    </>
  );
}

export default Login;
