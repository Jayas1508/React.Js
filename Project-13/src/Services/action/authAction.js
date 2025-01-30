import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../../config/Firebaseconfig"; // Import Firestore
import { doc, setDoc, getDoc } from "firebase/firestore"; // Firestore functions

// ACTION CREATORS
export const signupSuc = (users) => ({
    type: "SIGNUP_SUC",
    payload: users,
});

export const signInSuc = (users) => ({
    type: "SIGNIN_SUC",
    payload: users,
});

export const signuprej = (msg) => ({
    type: "SIGNUP_REJ",
    payload: msg,
});

export const signInrej = (msg) => ({
    type: "LOGIN_REJ",
    payload: msg,
});

export const signoutSucc = () => ({
    type: "LOGOUT_SUC",
});

// ASYNC FUNCTIONS

// SIGN UP (WITH FIRESTORE USER DATA STORAGE)
export const signUpAsync = (data) => {
    return async (dispatch) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const users = res.user;

            // Store user data in Firestore
            await setDoc(doc(db, "users", users.uid), {
                uid: users.uid,
                email: users.email,
                name: data.name || "", // If name is provided
                createdAt: new Date(),
            });

            dispatch(signupSuc(users));
        } catch (err) {
            dispatch(signuprej(err.message));
        }
    };
};

// SIGN IN
export const signInAsync = (data) => {
    return async (dispatch) => {
        try {
            const res = await signInWithEmailAndPassword(auth, data.email, data.password);
            const users= res.user;

            // Retrieve user data from Firestore
            const userDoc = await getDoc(doc(db, "users", users.uid));

            if (userDoc.exists()) {
                dispatch(signInSuc(userDoc.data()));
            } else {
                dispatch(signInrej("User data not found!"));
            }
        } catch (err) {
            dispatch(signInrej(err.message));
        }
    };
};

// SIGN OUT
export const signOutAsync = () => {
    return async (dispatch) => {
        try {
            await signOut(auth);
            dispatch(signoutSucc());
        } catch (err) {
            dispatch(signuprej(err.message));
        }
    };
};
