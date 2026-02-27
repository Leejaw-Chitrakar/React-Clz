import { useState } from "react";
import "../style/form.css"

const Form = ({onSubmit}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const handleAddFoodMenu = (e) => {
        e.preventDefault()
        let newFM = {
            id: Date.now(),
            name: name,
            price: price,
            description: description,
            image: imageUrl 
        }
        onSubmit(newFM);
        // setFoodMenuList([...foodMenuList, newFM])
        //reset form
        setName("")
        setPrice(0)
        setDescription("")
        setImageUrl("")
    }
    return(
        <div>
            <form onSubmit={handleAddFoodMenu}>
                <h3>Food Menu Form</h3>
                <div className="form-group">
                    <label>Food Name</label>
                    <input type="text" placeholder="Enter food name" 
                    value={name} onChange={
                        (e) => setName(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" placeholder="Price" value={price} onChange={
                        (e) => setPrice(Number(e.target.value))
                    }/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" placeholder="Description" value={description} onChange={
                        (e) => setDescription(e.target.value)
                    }/>
                </div>
                <div className="form-group">
                    <label>Image Url</label>
                    <input type="text" placeholder="Image Url" value={imageUrl} onChange={
                        (e) => setImageUrl(e.target.value)
                    } />
                </div>
                <button className="submit-btn" type="submit">Add to Menu</button>
            </form>
        </div>
    )
}

export default Form;