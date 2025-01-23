import { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { getdataAsyncAsync, serching, setdata } from '../servis/action/userAction';
import { useNavigate, useParams } from 'react-router';
import './style.css'
import { singleDataAsync } from '../servis/action/userAction';

const View = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const {user} = useSelector(state => state.userReducer)

    const [search, setsearch] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(singleDataAsync(id))
    }, [])
    console.log(user);
    
    return (
        <>
            <Container>
                {
                    user.map((user, index) => (
                        <div className="card " key={index}>
                            <div className="card__body">
                                <img src={user.img} className="img object-fit-cover rounded" />
                                <h2 className="card-title m-0"><p className='mx-1 m-0'>{user.name}</p></h2>
                                <h4 className='desc mx-1 m-0 '>{user.ingredients}</h4>
                                <h5 className='desc mx-1 m-0 '>{user.time}</h5>
                                <p className='desc mx-1 m-0 '>{user.description}</p>
                            </div>
                        </div>
                    ))
                }
            </Container>
        </>
    )
}
export default View;





{/* <Button variant="primary" className='my-3' onClick={() => hendelEdit(value.id)}>Edit</Button> */ }
{/* <Button variant="danger" className='my-3' onClick={() => hendelDelete(value.id)}>Delete</Button> */ }