import { connect } from "react-redux";
import { db } from ".././../config/Firebaseconfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { data } from 'react-router';


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
export const edits = () => {
    return {
        type: "EDIT_DATA",
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
export const set = (data) => {
    return {
        type: "SET",
        payload: data
    }
}
export const serching = (data) => {
    return {
        type: "SEARCH",
        payload: data
    }
}
export const getSingleRecipe = (data) => {
    return {
        type: "SET",
        payload: data
    }
}


export const addDataAsync = (data) => {
    return async (dispatch) => {
        try {
            await addDoc(collection(db, "user"), data);
            dispatch(addData());
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}
export const getdataAsync = () => {
    return async (dispatch) => {
        try {
            let result = []
            let res = await getDocs(collection(db, "user"))
            res.forEach((rec) => {
                result.push({ id: rec.id, ...rec.data() });
            });
            dispatch(gets(result));
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}

export const deletedata = (id) => {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "user", `${id}`));
            dispatch(getdataAsync());
        } catch (error) {
            dispatch(errorMessage(err.message));
        }
    }
}
export const setdata = (id) => {
    console.log(id);
    return async (dispatch) => {
        try {
            let record = await getDoc(doc(db, "user", `${id}`));
            let rec = record.data();
            rec.id = id;
            dispatch(setdatas(rec));
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}
export const edituser = (data) => {
    return async (dispatch) => {
        try {
            await updateDoc(doc(db, "user", `${data.id}`), data);
            console.log(data);
            dispatch(edits());
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}
