import { data } from "react-router";
import { db } from ".././../config/Firebaseconfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

export const errorMessage = (msg) => {
    return {
        type: "Error",
        payload: msg
    }
}
export const addData = () => {
    return {
        type: "ADD_DATA",
        payload: data
    }
}
export const editData = () => {
    return {
        type: "EDIT_DATA",
    }
}

export const getAlldata = (data) => {
    return {
        type: "GET_DATA",
        payload: data
    }
}

export const singleData = (data) => {
    return {
        type: "SINGLE_DATA",
        payload: data
    }
}
export const singleView = (data) => {
    return {
        type: "SINGLE_VIEW",
        payload: data
    }
}

export const serching = (data) => {
    return {
        type: "SEARCH",
        payload: data
    }
}

export const handleView = (data) => {
    
    return {
        type: "VIEW",
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
export const getAlldataAsync = () => {
    return async (dispatch) => {
        try {
            let result = []
            let res = await getDocs(collection(db, "user"))
            res.forEach((rec) => {
                result.push({ id: rec.id, ...rec.data() });
            });
            dispatch(getAlldata(result));
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}

export const deletedataAsync = (id) => {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "user", `${id}`));
            dispatch(getAlldataAsync());
        } catch (error) {
            dispatch(errorMessage(err.message));
        }
    }
}
export const singleDataAsync = (id) => {
    console.log(id);
    return async (dispatch) => {
        try {
            let record = await getDoc(doc(db, "user", `${id}`));
            let rec = record.data();
            rec.id = id;
            dispatch(singleData(rec));
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}

export const editDataAsync = (data) => {
    return async (dispatch) => {
        try {
            await updateDoc(doc(db, "user", `${data.id}`), data);
            console.log(data);
            dispatch(editData());
        } catch (error) {
            dispatch(errorMessage(error.message));
        }
    }
}
