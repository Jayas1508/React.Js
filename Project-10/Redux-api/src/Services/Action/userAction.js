import axios from 'axios'


export const errorMessage = (msg) => {
    return {
        type: "Error",
        payload: msg
    }
}

export const addData = () => {
    return {
        type: "ADD_DATA",
    }
}
export const edits = (data) => {
    return {
        type: "EDIT_DATA",
        payload: data
    }
}
export const deletes = () => {
    return {
        type: "DELETE_DATA",
    }
}
export const gets = (data) => {
    return {
        type: "GET_DATA",
        payload: data
    }
}

export const setdatas = (data) => {
    return {
        type: "SET_DATA",
        payload: data
    }
}
export const serching = (data) => {   
    return {
        type: "SEARCH",
        payload: data
    }
}

export const getdataAsync = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/users')
            .then(res => {
                dispatch(gets(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const addDataAsync = (data) => {
    return dispatch => {
        axios.post('http://localhost:3000/users', data)
            .then(res => {
                dispatch(addData())
            })
            .catch(err => {
                console.log(err)
                dispatch(errorMessage(err.message));
            })
    }
}
export const setdata = (id) => {
    return dispatch => {
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => {
                dispatch(setdatas(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(errorMessage(err.message));
            })
    }
}
export const edituser = (data) => {
    return dispatch => {
        axios.put(`http://localhost:3000/users/${data.id}`, data)
            .then(res => {
                dispatch(edits(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(errorMessage(err.message));
            })
    }
}
export const deletedata = (id) => {
    return dispatch => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(res => {
                dispatch(getdataAsync())
            })
            .catch(err => {
                console.log(err)
                dispatch(errorMessage(err.message));
            })
    }
}