import { combineReducers } from "redux"
import userReducer from "./userReducer"
import { authReducer } from "./authReducer"

const reducer = combineReducers({
    userReducer,
    authReducer
})
export default reducer