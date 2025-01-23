import "./Auth.css"
import { TfiEmail } from "react-icons/tfi";
import { FaLock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../../Services/action/authAction";
import { Link, useNavigate } from "react-router";
// import { authReducer } from './../../Services/reduser/authReducer';
import SignIn from './SignIn';

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isCreated } = useSelector(state => state.authReducer)
    const [inputs, setinputs] = useState({
        email: "",
        password: "",
        rpassword: ""
    })

    const hendelChange = (e) => {
        const { name, value } = e.target;
        setinputs({ ...inputs, [name]: value })
    }
    const hendelSubmit = (e) => {
        e.preventDefault();
        if (inputs.password === inputs.rpassword) {
            console.log(inputs);
            dispatch(signUpAsync(inputs))
        } else {
            alert("Password not match")
        }
    }
    useEffect(() => {
        if (isCreated) {
            navigate("/SignIn")
        }
    }, [isCreated])

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
                                    <input type="email" name="email" placeholder="Email" required onChange={hendelChange} value={inputs.email} />
                                </div>
                                <div className="input_field"> <span>
                                    <FaLock className="mt-2" />
                                </span>
                                    <input type="password" name="password" placeholder="Password" required onChange={hendelChange} value={inputs.password} />
                                </div>
                                <div className="input_field"> <span>
                                    <FaLock className="mt-2" />
                                </span>
                                    <input type="password" name="rpassword" placeholder="Re-type Password" required onChange={hendelChange} value={inputs.rpassword} />
                                </div>
                                <div className="row clearfix">
                                    <div className="col_half">
                                    </div>
                                </div>
                                <input className="button" type="submit" value="Register" />
                            </form>
                            <p className="credit">Already have an account? <Link to="/signIn">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p >Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p> */}
        </>
    )

}

export default SignUp;