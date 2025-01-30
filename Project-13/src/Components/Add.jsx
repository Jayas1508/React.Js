import { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addDataAsync } from "../Services/action/userAction";
import { useNavigate } from "react-router";
import axios from "axios"; // Import axios
import { toast } from "react-toastify"; // Import toast for notifications

const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCreated, errMSG } = useSelector((state) => state.userReducer);
    const [input, setInput] = useState({
        name: "",
        img: "",
        time: "",
        description: "",
        ingredients: "",
    });

    const [imageFile, setImageFile] = useState(null); // Store selected image
    const [uploading, setUploading] = useState(false); // Upload status

    // Handle text input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    // Handle image file selection
    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]); // Store selected file
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

            setInput({ ...input, img: response.data.secure_url }); // Store image URL
            toast.success("Image uploaded successfully!");
        } catch (error) {
            console.error("Image upload failed", error);
            toast.error("Image upload failed!");
        } finally {
            setUploading(false);
        }
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.img) {
            toast.error("Please upload an image before submitting!");
            return;
        }
        dispatch(addDataAsync(input));
    };

    // Redirect after successful submission
    useEffect(() => {
        if (isCreated) {
            navigate("/home");
        }
    }, [isCreated]);

    return (
        <>
            <div className="containers">
                {errMSG && <div className="alert alert-danger">{errMSG}</div>}

                <form onSubmit={handleSubmit}>
                    <h1>Recipes</h1>
                    <div className="form-group">
                        <label>Recipe Name:</label>
                        <input type="text" placeholder="Recipe Name" value={input.name} name="name" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Recipe Ingredients:</label>
                        <input type="text" placeholder="Ingredients" value={input.ingredients} name="ingredients" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <input type="text" placeholder="Time" value={input.time} name="time" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Upload Image:</label>
                        <input type="file" accept="image/*" onChange={handleFileChange} required />
                        <button type="button" onClick={handleImageUpload} disabled={uploading}>
                            {uploading ? "Uploading..." : "Upload Image"}
                        </button>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" placeholder="Description" value={input.description} name="description" onChange={handleChange} required />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </div>
        </>
    );
};

export default Add;
