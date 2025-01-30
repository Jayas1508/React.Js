const initialState = {
    users: [],
    user: null,
    isUpdated: false,
    isCreated: false,
    errMSG: null,
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Error":
            return {
                ...state,
                errMSG: action.payload
            }

        case 'ADD_DATA':
            return {
                ...state,
                isCreated: true
            }
        case 'EDIT_DATA':
            return {
                ...state,
                user: null,
                isUpdated: true
            }
        case 'GET_DATA':
            return {
                ...state,
                users: action.payload,
                isCreated: false
            }
        case 'SET_DATA':
            return {
                ...state,
                user: action.payload
            }
        case 'DELETE_DATA':
            return {
                ...state,
            }
        case 'SEARCH':
            let filterdata = state.users.filter((value) => (value.senderName === action.payload))
            return {
                ...state,
                users: filterdata
            }
        default:
            return state;
    }
}

export default userReducer