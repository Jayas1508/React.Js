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
                isUpdated: true,
            }
        case 'GET_DATA':
            return {
                ...state,
                users: action.payload,
                isCreated: false,
                isUpdated: false,
            }
        case 'SINGLE_DATA':
            return {
                ...state,
                user: action.payload
            }

        case 'SEARCH':
            let filterdata = state.users.filter((value) => (value.name === action.payload))
            return {
                ...state,
                users: filterdata
            }
            case 'VIEW':
                return {
                    ...state,
                    user: action.payload
                }
        default:
            return state;
    }
}

export default userReducer;