const initialState = {
    users: null,  // Keeping "users" as per your database setup
    isCreated: false,
    errMsg: ""
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNUP_SUC":
            return {
                ...state,
                isCreated: true,
                users: action.payload,  // Ensuring consistency
            };
        case "SIGNIN_SUC":
        case "LOGIN_SUC":  // Merging similar login actions
            return {
                ...state,
                isCreated: false,
                users: action.payload,
            };
        case "SIGNUP_REJ":
        case "LOGIN_REJ":
            return {
                ...state,
                errMsg: action.payload,
            };
        case "LOGOUT_SUC":
            return {
                ...state,
                users: null,
                isCreated: false,
            };
        default:
            return state;
    }
};
