import { useEffect, useState } from "react";
import generateUniqueId from 'generate-unique-id'
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addDataAsync } from "../servis/action/userAction";
import { useNavigate } from "react-router";
const Add = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isCreated, errMSG } = useSelector(state => state.userReducer)
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
        console.log(input)
        dispatch(addDataAsync(input))
    }

    useEffect(() => {
        if (isCreated) {
            navigate('/');
        }
    }, [isCreated])

    return (
        <>
            <div className="containers">
                {errMSG ? <>
                    <div className="alert alert-danger" role="alert">
                        {errMSG}
                    </div>
                </>
                    : ""}
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
                        <label >Time:</label>
                        <input type="time" id="time" placeholder="time" value={input.time} name="time" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >img:</label>
                        <input type="text" placeholder="img" value={input.img} name="img" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Description:</label>
                        <input type="text" id="description" placeholder="Description" value={input.description} name="description" onChange={hendelchang} required />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    )
}
export default Add