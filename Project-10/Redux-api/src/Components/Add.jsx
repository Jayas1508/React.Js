import { useEffect, useState } from "react";
import generateUniqueId from 'generate-unique-id'
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addDataAsync } from "../Services/Action/userAction";
import { useNavigate } from "react-router";
const Add = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isCreated, errMSG } = useSelector(state => state.userReducer)
    const [input, setInput] = useState({
        senderName: "",
        recipientName: "",
        recipientAccountNumber: "",
        recipientBankName: "",
        recipientPhoneNumber: "",
        amount: "",
        description: ""
    })

    const hendelchang = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const hendelSubmit = (e) => {
        e.preventDefault()
        let id = generateUniqueId({
            length: 6,
            useLetters: false
        })
        console.log(input)
        dispatch(addDataAsync({ ...input, id }))
    }

    useEffect(() => {
        if (isCreated) {
            navigate('/');
            // location.reload()
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
                    <h1>Add User</h1>
                    <div className="form-group">
                        <label >Frist Name:</label>
                        <input type="text" id="sender-name" placeholder="Your Name" value={input.senderName} name="senderName" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label> Last Name:</label>
                        <input type="text" id="recipient-name" placeholder="Recipient's Name" value={input.Name} name="recipientName" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="text" id="recipient-phone-number" placeholder="Recipient's Phone Number" value={input.PhoneNumber} name="recipientPhoneNumber" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Amount:</label>
                        <input type="number" id="amount" placeholder="Amount" value={input.amount} name="amount" onChange={hendelchang} required />
                    </div>
                    <div className="form-group">
                        <label >Account No:</label>
                        <input type="number" id="description" placeholder="Account No" value={input.AccountNumber} name="Account No" onChange={hendelchang} required />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    )
}
export default Add