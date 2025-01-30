import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync } from "../../Services/action/authAction";
import { auth, googleProvider } from "../../config/Firebaseconfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const [signInInput, setSignInInput] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignInInput({ ...signInInput, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const profileCredential = await signInWithEmailAndPassword(auth, signInInput.email, signInInput.password);
            dispatch(signInAsync(profileCredential.profile));
            toast.success("Login Successful! 🎉");
            navigate("/home");
        } catch (error) {
            toast.error("Login Failed! ❌ " + error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            dispatch(signInAsync(result.profile));
            toast.success("Google Login Successful! 🎉");
            navigate("/home");  
        } catch (error) {
            toast.error("Google Login Failed! ❌ " + error.message);
        }
    };

    useEffect(() => {
        if (profile) {
            navigate("/home");
        }
    }, [profile, navigate]);

    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Login Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="input_field">
                                    <span className="h-50 mt-2"><TfiEmail /></span>
                                    <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={signInInput.email} />
                                </div>
                                <div className="input_field">
                                    <span><FaLock className="mt-2" /></span>
                                    <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={signInInput.password} />
                                </div>
                                <input className="button" type="submit" value="Sign In" />
                            </form>
                            <button onClick={handleGoogleSignIn} className="google-signin-button">
                                Sign in with Google
                            </button>
                            <p className="credit">Don't have an account? <Link to="/">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
