import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getdataAsync, serching, setdata } from '../servis/action/userAction';
import { data, useNavigate, useParams } from 'react-router';
import './style.css'

const View = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { user } = useSelector(state => state.userReducer)

    const [search, setsearch] = useState("")
    const dispatch = useDispatch()

    const hendelSearch = () => {
        dispatch(serching(search))
    }

    useEffect(() => {
        dispatch(setdata(id))
    }, [])

    let arr = []
    arr.push(user);
    console.log(user);

    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <h1 className='text-white d-felx '>Recipe App</h1>
                            <p className='text-white d-felx'>Your personalized recipe collection made modern.</p>
                            <div className="search-bar d-felx">
                                <div className="d-flex justify-content-center align-items-center col-4">
                                    <input type="text" id="search" placeholder="Search for a recipe..." />
                                    <Button variant="primary col-3 ms-4" onClick={hendelSearch}>Search</Button>
                                </div>
                            </div>
                            <div className="recipe-grid" id="recipeGrid">
                                {
                                    arr.map((value, index) => (
                            <div className="card" key={index} >
                                <div className="card ">
                                    <div className="card__body">
                                        <img src={value.img} className="img object-fit-cover rounded" />
                                        <h2 className="card-title m-0"><p className='mx-1 m-0'>{value.name}</p></h2>
                                        <h4 className='desc mx-1 m-0 '>{value.ingredients}</h4>
                                        <h5 className='desc mx-1 m-0 '>{value.time}</h5>
                                        <p className='desc mx-1 m-0 '>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </Container>



        </>
    )
}
export default View;





{/* <Button variant="primary" className='my-3' onClick={() => hendelEdit(value.id)}>Edit</Button> */ }
{/* <Button variant="danger" className='my-3' onClick={() => hendelDelete(value.id)}>Delete</Button> */ }