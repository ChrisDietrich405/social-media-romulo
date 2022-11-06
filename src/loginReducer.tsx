export const initialState = {
  username: "",
  password: "",
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isLoading: true };
    case "success":
      return { ...state, isLoggedIn: true, isLoading: false}
    case "error":
      return { ...state, isLoggedIn: false, username: "", password: "", error: "big problems"}
      
    default:
      return state;
  }
};
