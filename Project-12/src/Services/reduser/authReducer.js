const initalState = {
    user: null,
    isCreated: false,
    errMsg: ""
}

export const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SIGNUP_SUC":
            return {
                ...state,
                isCreated: true,
            }
        case "SIGNIN_SUC":
            return {
                ...state,
                isCreated: false,
                user: action.payload,
            }
        case "SIGNUP_REJ":
            return {
                ...state,
                errMsg: action.payload
            }

        case "LOGIN_SUC":
            return {
                ...state,
                isCreated: false,
                user: action.payload
            }
        case "LOGIN_REJ":
            return {
                ...state,
                isCreated: false,
                errMsg: action.payload
            }
        case "LOGOUT_SUC":
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }


}