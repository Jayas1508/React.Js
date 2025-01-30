import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { edituser, setdata } from "../Services/action/userAction";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user, isUpdated } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        img: "",
        description: "",
        ingredients: "",
        time: "",
    });

    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    // Upload image to Cloudinary
    const handleImageUpload = async () => {
        if (!imageFile) {
            toast.error("Please select an image!");
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "recipe-img"); // Replace with your Cloudinary preset

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dmx1evdjl/image/upload", // Replace with your Cloudinary cloud name
                formData
            );

            setInput({ ...input, img: response.data.secure_url });
            toast.success("Image uploaded successfully!");
        } catch (error) {
            console.error("Image upload failed", error);
            toast.error("Image upload failed!");
        } finally {
            setUploading(false);
        }
    };

    // Submit edited data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.img) {
            toast.error("Please upload an image before submitting!");
            return;
        }
        dispatch(edituser({ ...input, id })); // Ensure we send the correct id
    };

    // Fetch existing data
    useEffect(() => {
        dispatch(setdata(id));
    }, [id, dispatch]);

    // Populate input fields when data is available
    useEffect(() => {
        if (user) setInput(user);
    }, [user]);

    // Redirect after successful update
    useEffect(() => {
        if (isUpdated) {
            navigate("/home");
        }
    }, [isUpdated, navigate]);

    return (
        <>
            <div className="containers">
                <form onSubmit={handleSubmit}>
                    <h1>Edit Recipe</h1>
                    <div className="form-group">
                        <label>Recipe Name:</label>
                        <input type="text" placeholder="Recipe Name" value={input.name} name="name" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipe Ingredients:</label>
                        <input type="text" placeholder="Ingredients" value={input.ingredients} name="ingredients" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipe Time:</label>
                        <input type="text" placeholder="Time" value={input.time} name="time" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Upload New Image:</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <button type="button" onClick={handleImageUpload} disabled={uploading}>
                            {uploading ? "Uploading..." : "Upload Image"}
                        </button>
                    </div>
                    <div className="form-group">
                        <label>Current Image:</label>
                        {input.img && <img src={input.img} alt="Recipe" style={{ width: "100px", height: "100px" }} />}
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" placeholder="Description" value={input.description} name="description" onChange={handleChange} required />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </>
    );
};

export default Edit;
