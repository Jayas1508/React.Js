import { useEffect, useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { deletedataAsync, getAlldataAsync, serching } from '../Services/action/userAction';
import './style.css';
import { deletedata, getdataAsync, serching } from '../Services/action/userAction';

const Home = () => {
    const { users } = useSelector(state => state.userReducer);
    const [search, setSearch] = useState("");
    // const { isCreated } = useSelector(state => state.userReducer)
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleView = (recipe) => {
        setSelectedRecipe(recipe);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRecipe(null);
    };

    const handleDelete = (id) => {
        dispatch(deletedata(id));
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleSearch = () => {
        dispatch(serching(search));
    };

    useEffect(() => {
        dispatch(getdataAsync());
    }, [dispatch]);

    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="search-bar d-flex justify-content-center align-items-center">
                                <div className="d-flex justify-content-center align-items-center col-4">
                                    <input
                                        type="text"
                                        placeholder="Search for a recipe..."
                                        name="search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <Button variant="primary col-3 ms-4" onClick={handleSearch}>Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between flex-direction-column flex-wrap">
                    {users.map((value, index) => (
                        <div className="card p-4" key={index}>
                            <div className="card__body">
                                <img src={value.img} className="img object-fit-cover rounded" alt={value.name} />
                                <h2 className="card-title m-0"><p className=" m-0">{value.name}</p></h2>
                                <h4 className="desc ps-3 m-0">{value.time}</h4>
                            </div>
                            <Button className="card-btn" onClick={() => handleView(value)}>View Recipe</Button>
                            <Button className="card-btn my-3" onClick={() => handleEdit(value.id)}>Edit</Button>
                            <Button className="card-btn my-3" onClick={() => handleDelete(value.id)}>Delete</Button>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Modal for Viewing Recipe */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRecipe?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedRecipe && (
                        <>
                            <img src={selectedRecipe.img} alt={selectedRecipe.name} className="img-fluid mb-3" />
                            <p><strong>Time:</strong> {selectedRecipe.time}</p>
                            <p><strong>Description:</strong> {selectedRecipe.description}</p>
                            <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Home;
