import { useState } from "react"
import initialFoodData from "../datas/food_menue_data.js"
import Form from "../component/form.jsx"
import "../style/form.css"

const DynamicFoodMenus = () => {
    const [foodItems, setFoodItems] = useState(initialFoodData)
    
    const handleAddFoodMenu = (newFM) => {
        setFoodItems([...foodItems, newFM])
    }

    return (
        <div className="main-container">
            <div className="menu-section" style={{ flex: 1 }}>
                <h1 className="menu-title">Explore Our Menu</h1>
                <div className="food-grid">
                    {
                        foodItems.map(
                            (fm) => {
                                return (
                                    <div key={fm.id} className="food-card">
                                        <div className="image-wrapper">
                                            <img src={fm.image} alt={fm.name} />
                                            <span className="price-tag">${fm.price}</span>
                                        </div>
                                        <div className="food-info">
                                            <h4>{fm.name}</h4>
                                            <p>{fm.description}</p>
                                        </div>
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