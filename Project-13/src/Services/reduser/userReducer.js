const initialState = {
    users: [],
    user: null,
    isUpdated: false,
    isCreated: false,
    errMSG: null,
    viewdata:null
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
        case 'SET_DATA':
            return {
                ...state,
                user: action.payload
            }
            // case 'SET':
            //     return {
            //         ...state,
            //         viewdata: action.payload
            //     }
        case 'SEARCH':
            let filterdata = state.users.filter((value) => (value.name === action.payload))
            return {
                ...state,
                users: filterdata
            }
        default:
            return state;
    }
}

export default userReducer