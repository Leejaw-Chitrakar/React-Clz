import { useState } from "react";
import "../style/form.css"

const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleAddFoodMenu = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!name.trim() || !price) {
            alert("Please fill in the name and price.");
            return;
        }

        let newFM = {
            id: Date.now(),
            name: name,
            price: Number(price),
            description: description,
            image: imageUrl || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop" // Default image if empty
        };
        
        onSubmit(newFM);

        // Reset form
        setName("");
        setPrice("");
        setDescription("");
        setImageUrl("");
    };

    return (
        <div className="form-card">
            <form onSubmit={handleAddFoodMenu}>
                <h3>Add New Food</h3>
                <div className="form-group">
                    <label>Food Name</label>
                    <input 
                        type="text" 
                        placeholder="e.g. Delicious Pizza" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price ($)</label>
                    <input 
                        type="number" 
                        placeholder="Price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        min="0"
                        step="0.01"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        placeholder="What makes this food special?" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input 
                        type="url" 
                        placeholder="https://example.com/image.jpg" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                    />
                </div>
                <button className="submit-btn" type="submit">Add to Menu</button>
            </form>
        </div>
    );
};

export default Form;