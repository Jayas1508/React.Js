import { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
// import { signInAsync } from "../../Services/action/authAction";
import { Link, useNavigate } from "react-router";
import { signInAsync } from "../../Services/action/authAction";
// import Home from './../Home';

const SignIn = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const [signInInput, setSignInInput] = useState({
        email: "",
        password: "",
    })

    const hendelChange = (e) => {
        const { name, value } = e.target;
        setSignInInput({
            ...signInInput,
            [name]: value
        })
    }

    const hendelSubmit = (e) => {
        e.preventDefault();
        dispatch(signInAsync(signInInput))
    }

    useEffect(() => {
        if (user) {
            navigate("/home")
        }
    }, [user]);
    return (
        <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2> Registration Form</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form onSubmit={hendelSubmit}>
                                <div className="input_field"> <span className="h-50 mt-2">
                                    <TfiEmail />
                                </span>
                                    <input type="email" name="email" placeholder="Email" required onChange={hendelChange} value={signInInput.email} />
                                </div>
                                <div className="input_field"> <span>
                                    <FaLock className="mt-2" />
                                </span>
                                    <input type="password" name="password" placeholder="Password" required onChange={hendelChange} value={signInInput.password} />
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                    </div>
                                </div>
                                <input className="button" type="submit" value="Sign In" />
                            </form>
                            <p className="credit">Already have an account? <Link to="/">SignIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;