import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
// import { addDataAsync, edituser, setdata } from "../servis/action/userAction";
import { useNavigate, useParams } from "react-router";
import { editDataAsync, singleDataAsync } from "../servis/action/userAction";
import { updateDoc } from 'firebase/firestore';
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { user, isUpdated } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        img: "",
        amount: "",
        description: "",
        ingredients: "",
    })
    const hendelchang = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const hendelSubmit = (e) => {
        e.preventDefault()
        // console.log(input)
        dispatch(editDataAsync(input))
        navigate("/")
    }
    useEffect(() => {
        dispatch(singleDataAsync(id))
    }, [])
    console.log(user);
    useEffect(() => {
        if (user)
            setInput(user);
    }, [user])

    useEffect(() => {
        if (isUpdated) {
            navigate("/")
        }
    }, [isUpdated]);
    return (
        <>
            <div className="containers">
                <form onSubmit={hendelSubmit}>
                    <h1>Recipes</h1>
                    <div className="form-group">
                        <label >Recipe Name :</label>
                        <input type="text" id="sender-name" placeholder="Your Name" value={input.name} name="name" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Recipe Ingredients :</label>
                        <input type="text" id="sender-name" placeholder="Your Name" value={input.ingredients} name="ingredients" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Recipe Time :</label>
                        <input type="time" id="sender-name" placeholder="time" value={input.time} name="time" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >img:</label>
                        <input type="text" placeholder="img" value={input.img} name="img" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Description:</label>
                        <input type="text" id="sender-name" placeholder="Description" value={input.description} name="description" onChange={hendelchang} required />
                    </div>
                    <button type="submit">update</button>
                </form>
            </div>
        </>
    )
}
export default Edit