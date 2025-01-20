import { Button, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { useNavigate } from "react-router";
import './style.css'
const Header = () => {
    const navigate = useNavigate()
    const hendelAdd = () => {
        navigate('/add')
    }
    const hendelHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className="px-3 mb-3 bg-white">
                <Container>
                    <header className="header">
                        <div className="logo">
                        <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto">
                            <img src="https://as2.ftcdn.net/jpg/02/75/77/59/1000_F_275775971_xM0xqMUXgdCQuo0he9em32qu7OiVcx1P.webphttps://t4.ftcdn.net/jpg/06/70/31/45/360_F_670314597_5iQ2ZyYKdgZsgiibFIUqka8sgG8uPIV2.jpg" className="img " alt="" />
                        </div>  

                        </div>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li className="me-4">
                                <Button variant="dark" onClick={hendelHome}>
                                    <FaHome className="me-2" size={17} />
                                    Home
                                </Button>
                            </li>
                            <li >
                                <Button variant="dark" onClick={hendelAdd}>
                                    <IoFastFood className="me-2" />
                                    Add Recipe
                                </Button>
                            </li>
                        </ul>
                    </header>

                </Container>
            </div>
        </>
    )
}
export default Header;