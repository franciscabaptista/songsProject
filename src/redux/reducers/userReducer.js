import { LOGIN_SUCC, LOGIN_ERROR, LOGOUT } from "../actions/actionTypes";

const initialState = {
  isLogged: false,
  email: "",
  password: "",
  error: "",
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCC:
      const { email, password } = action.payload;
      return { ...state, isLogged: true, email, password, error: "" };

    case LOGIN_ERROR:
      return { ...state, error: action.payload };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
export default loginReducer;
