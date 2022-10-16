import {IInitialState} from "./model"

export const initialState: IInitialState = {
    password: "",
    username: "",
    error: "",
    isLoading: false,
    isLoggedIn: false
}

interface IAction {
    payload: any;
    type: string; 
    fieldName: string; 
}

export const loginReducer = (state, action) => {
    switch(action.type) {
        case "field":
            return { ...state, [action.fieldName]: action.payload}
        case "login":
            return { ...state, isLoading: true, error: false}
        case "success":
            return { ...state, isLoggedIn: true, error: false, isLoading: false}
        case "error":
            return { ...state, error: "big problems", isLoading: false, username: "", password: ""}
        default: 
            return state
        }
}