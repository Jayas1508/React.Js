import "./Auth.css";
import { TfiEmail } from "react-icons/tfi";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../../Services/action/authAction";
import { Link, useNavigate } from "react-router";
import { auth, googleProvider, db } from "../../config/Firebaseconfig"; // Import Firestore
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.authReducer);
    const [inputs, setInputs] = useState({ email: "", password: "", rpassword: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const saveUserToFirestore = async (user) => {
        try {
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                createdAt: new Date(),
            });
        } catch (error) {
            console.error("Error saving user: ", error);
            toast.error("Failed to save user data! ❌");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputs.password === inputs.rpassword) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password);
                const user = userCredential.user;

                // Save user to Firestore
                await saveUserToFirestore(user);

                dispatch(signUpAsync(user));
                toast.success("Registration Successful! 🎉");
                navigate("/signIn");
            } catch (error) {
                toast.error("Signup Failed! ❌ " + error.message);
            }
        } else {
            toast.error("Passwords do not match! ❌");
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            // Save Google user to Firestore
            await saveUserToFirestore(user);

            dispatch(signUpAsync(user));
            toast.success("Google Sign-Up Successful! 🎉");
            navigate("/home");
        } catch (error) {
            toast.error("Google Sign-Up Failed! ❌ " + error.message);
        }
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/signIn");
        }
    }, [isCreated, navigate]);

    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2> Registration Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="input_field">
                                    <span className="h-50 mt-2"><TfiEmail /></span>
                                    <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={inputs.email} />
                                </div>
                                <div className="input_field">
                                    <span><FaLock className="mt-2" /></span>
                                    <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={inputs.password} />
                                </div>
                                <div className="input_field">
                                    <span><FaLock className="mt-2" /></span>
                                    <input type="password" name="rpassword" placeholder="Re-type Password" required onChange={handleChange} value={inputs.rpassword} />
                                </div>
                                <input className="button" type="submit" value="Register" />
                            </form>
                            <button onClick={handleGoogleSignUp} className="google-signin-button">
                                Sign up with Google
                            </button>
                            <p className="credit">Already have an account? <Link to="/signIn">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
