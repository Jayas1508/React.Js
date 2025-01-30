import { Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.authReducer); // Fixed "users" to "user"

    const handleAdd = () => {
        navigate("/add");
    };

    const handleHome = () => {
        navigate("/home");
    };

    const handleLogOut = () => {
        dispatch(signOutAync());
    };

    const handleSignIn = () => {
        navigate("/signIn");
    };

    return (
        <div className="px-3 mb-3 bg-white">
            <header className="header d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-center">
                    <img 
                        src="https://t4.ftcdn.net/jpg/06/70/31/45/360_F_670314597_5iQ2ZyYKdgZsgiibFIUqka8sgG8uPIV2.jpg" 
                        className="img" 
                        alt="Recipe App Logo" 
                    />
                    <h1 className="text-black ms-2">Recipe App</h1>
                </div>

                <ul className="nav d-flex align-items-center">
                    <li className="me-4">
                        <Button variant="dark" onClick={handleHome}>
                            <FaHome className="me-2" size={17} />
                            Home
                        </Button>
                    </li>
                    <li className="me-4">
                        <Button variant="dark" onClick={handleAdd}>
                            <IoFastFood className="me-2" />
                            Add Recipe
                        </Button>
                    </li>
                    <li>
                        {users ? (
                            <Button variant="dark" onClick={handleLogOut}>
                                <IoMdLogOut className="me-2" />
                                SignIn
                            </Button>
                        ) : (
                            <Button variant="dark" onClick={handleSignIn}>
                                <FaSignInAlt className="me-2" />
                                LogOut
                            </Button>
                        )}
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
