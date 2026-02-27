import { useState } from "react"
import initialFoodData from "../datas/food_menue_data.js"
import Form from "../component/form.jsx"
import "../style/form.css"

const DynamicFoodMenus = () => {
    const [foodItems, setFoodItems] = useState(initialFoodData)
    
    const handleAddFoodMenu = (newFM) => {
        setFoodItems([...foodItems, newFM])
    }
    return(
        <div className="main-container">
            <div style={{ flex: 1 }}>
                <h1>Food Menu</h1>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "20px", 
                }}>
                    {
                        foodItems.map(
                            (fm) => {
                                return(
                                    <div key = {fm.id} style = {{
                                        backgroundColor: "orange",
                                        borderRadius: "20px",
                                        padding: "10px",
                                        border: "3px solid black",
                                    }}>
                                        <h4>{fm.name}</h4>
                                        <b>Price: {fm.price}</b>
                                        <p>{fm.description}</p>
                                        <img src={fm.image} alt={fm.name} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>

            <div className="form-container">
                <Form onSubmit={handleAddFoodMenu} />
            </div>
        </div>
    )
}

export default DynamicFoodMenus;