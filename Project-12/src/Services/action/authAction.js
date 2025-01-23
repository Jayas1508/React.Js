import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../config/Firebaseconfig"

export const signupSuc = () => {
    return {
        type: "SIGNUP_SUC"
    }
}
export const signInSuc = (user) => {
    return {
        type: "SIGNIN_SUC",
        payload: user
    }
}
export const signuprej = (msg) => {
    return {
        type: "SIGNUP_REJ",
        payload: msg
    }
}
export const signoutSucc = () => {
    return {
        type: "LOGOUT_SUC"
    }
}


export const signUpAsync = (data) => {
    return async dispatch => {
        try {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((res) => {
                    // console.log(res.user)
                    dispatch(signupSuc())
                })
                .catch(err => {
                    dispatch(signuprej(err.message))
                });
        } catch (err) {
            console.log(err);
            dispatch(signuprej(err.message))
        }
    }
}

export const signInAsync = (data) => {
    return async dispatch => {
        try {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((res) => {
                    // console.log(res.user)
                    dispatch(signInSuc(res.user))
                })
                .catch(err => {
                    dispatch(signInrej(err.message))
                });
        } catch (err) {
            console.log(err);
            dispatch(signInrej(err.message))
        }
    }
}
export const signOutAync = () => {
    return async dispatch => {
        try {
            signOut(auth).then(() => {
                dispatch(signoutSucc())
            }).catch((err) => {
                dispatch(signuprej(err.message))
            })
        } catch (err) {
            console.log(err);
            dispatch(signuprej(err.message))
        }
    }
}