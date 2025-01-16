import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletedata, getdataAsync, serching } from '../Services/Action/userAction';
import { useNavigate } from 'react-router';
import './style.css'
const Home = () => {
    const navigate = useNavigate()
    const { users } = useSelector(state => state.userReducer)
    const [search, setsearch] = useState("")
    const dispatch = useDispatch()

    const hendelDelete = (id) => {
        dispatch(deletedata(id))
    }
    const hendelEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const hendelSearch = () => {
        // console.log(search)
        dispatch(serching(search))
    }

    useEffect(() => {
        dispatch(getdataAsync())
    }, [])

    return (
        <>
            <div className="containers ">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center m-0">View Bank Datails</h1>
                    </div>
                </div>
            </div>
            <Container>
                <div className="d-flex justify-content-center align-items-center col-4">
                    <p className='m-0 me-2 fw-bold'>Filter :-</p>
                    <input type="text col-5" placeholder='Search' name="search" value={search} onChange={(e) => setsearch(e.target.value)} />
                    <Button variant="primary col-3 ms-4" onClick={hendelSearch}>Search</Button>
                </div>
                <div className="container">
                    <Row className='d-flex justify-content-center'>
                        {
                            users.map((value, index) => (
                                <div className="box" key={index}>
                                    <div className="top">
                                        <a href="#" id="star"><i className="fa fa-star ico"></i></a>
                                        <div className="profile"></div>
                                        <h1 className="title">{value.senderName}</h1>
                                        <h3 className="job">{value.recipientName}</h3>
                                    </div>
                                    <div className="bottom">
                                        <div className="links">
                                            <ul>
                                                <li><a href="#">Amount:- {value.amount}</a></li>
                                                <li><a href="#">Phone:-{value.recipientPhoneNumber}</a></li>
                                                <li><i className="fa fa-circle green"></i><a href="#">Ac No:- {value.recipientAccountNumber}</a></li>
                                            </ul>
                                        </div>
                                        <div className="social-links">
                                            <div className="d-flex justify-content-center justify-content-md-start mt-3">
                                                <Button variant="danger" className='me-4' onClick={() => hendelDelete(value.id)}>Delete</Button>
                                                <Button variant="primary" onClick={() => hendelEdit(value.id)}>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Row>
                </div>
            </Container>


        </>
    )
}
export default Home;