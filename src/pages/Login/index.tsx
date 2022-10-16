import React, { useEffect, useReducer, useRef } from "react";
import { loginReducer } from "../../loginReducer";
import { login } from "../../utils";
import { api } from "../../Services/axios";
import { initialState } from "../../loginReducer";

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login" });

    if (login(usernameRef?.current?.value, passwordRef.current?.value)) {
      console.log("whatever");
      dispatch({ type: "success" });
    } else {
      dispatch({ type: "error" });
    }
  };

  useEffect(() => {
    api
      .post("/login", {
        params: JSON.stringify({
          username: "username",
          password: "password",
        }),
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      {state.isLoading ? (
        <p>...loading</p>
      ) : (
        <>
          {state.isLoggedIn ? <p>your logged in</p> : <p>your not logged in</p>}
          {state.error && <p>{state.error}</p>}
          <form onSubmit={onSubmit}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="username"
              onChange={(e) =>
                dispatch({
                  type: "field",
                  payload: e.target.value,
                  fieldName: "username",
                })
              }
            />
            <input
              ref={passwordRef}
              type="text"
              placeholder="password"
              onChange={(e) =>
                dispatch({
                  type: "field",
                  payload: e.target.value,
                  fieldName: "password",
                })
              }
            />
            <button type="submit">log in</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
