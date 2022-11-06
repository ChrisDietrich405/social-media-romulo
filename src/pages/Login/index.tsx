import React, { useRef, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { loginReducer, initialState } from "../../loginReducer";

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    if (
      usernameRef.current.value === "chris" &&
      passwordRef.current.value === "password"
    ) {
      alert("you logged in");
      // nav("/");
    }
    
    dispatch({ type: "error"})
    dispatch({ type: "success" });
  };

  return (
    <>
      {state.error && <h1>{state.error}</h1>}
      {state.isLoggedIn ? (
        <h1>welcome {usernameRef.current.value}</h1>
      ) : (
        <>
          <input type="text" ref={usernameRef} placeholder="username" />
          <input type="password" ref={passwordRef} placeholder="password" />
          <button onClick={handleSubmit}>enter</button>
        </>
      )}
    </>
  );
};

export default Login;
