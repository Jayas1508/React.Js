import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addData, edituser, setdata } from "../Services/Action/userAction";
import { useNavigate, useParams } from "react-router";
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const { user, isUpdated } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        id: "",
        senderName: "",
        recipientName: "",
        AccountNumber: "",
        PhoneNumber: "",
        amount: "",
        
    })

    const hendelchang = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const hendelSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        dispatch(edituser(input))
        navigate("/")
    }
    useEffect(() => {
        dispatch(setdata(id))
    }, [])

    useEffect(() => {
        if (user)
            setInput(user);
    }, [user])

    useEffect(()=> {
        if(isUpdated){
            navigate("/")
        }
    }, [isUpdated]);

    return (
        <>
            <div className="containers">
                <form onSubmit={hendelSubmit}>
                    <h1>Edit User</h1>
                    <div className="form-group">
                        <label >Frist Name:</label>
                        <input type="text" id="sender-name" placeholder="Your Name" value={input.senderName} name="senderName" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label> Last Name:</label>
                        <input type="text" id="recipient-name" placeholder="Recipient's Name" value={input.recipientName} name="recipientName" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text" id="recipient-phone-number" placeholder="Recipient's Phone Number" value={input.recipientPhoneNumber} name="recipientPhoneNumber" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Amount:</label>
                        <input type="number" id="amount" placeholder="Amount" value={input.amount} name="amount" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Account No:</label>
                        <input type="number" id="description" placeholder="Account No" value={input.AccountNumber} name="Account No" onChange={hendelchang} required />
                    </div>
                    <button type="submit">Updeat User</button>
                </form>
            </div>
        </>
    )
}
export default Edit