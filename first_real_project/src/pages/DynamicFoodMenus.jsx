import { useState } from "react"
import foodMenuList from "../datas/food_menue_data.js"

const DynamicFoodMenus = () => {
    const [foodMenuList, setFoodMenuList] = useState([
         {
        id: 1,
        name: "MOMO",
        price: 150,
        description: "This is momo.",
        image: "https://images.unsplash.com/photo-1694923450868-b432a8ee52aa?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    ])
    const handleAddFoodMenu = () => {
        let newFm = {
            id: 3,
            name: "Burger",
            price: 220,
            description: "This is Burger.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        };
        setFoodMenuList([...foodMenuList, newFm])

    }
    return(
        <div>
            <h1>Food Menu</h1>
            {/* rendering list */}
            <button onClick={handleAddFoodMenu}>Add Food Menu</button>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px", 
            }}>
                {
                    foodMenuList.map(
                        (fm,i) => {
                            return(
                                <div key = {`${fm.id}-${fm.name}`} style = {{
                                    backgroundColor: "orange",
                                    borderRadius: "20px",
                                    padding: "10px",
                                    border: "3px solid black",
                                }}>
                                    <h4>{fm.name}</h4>
                                    <b>Price: {fm.price}</b>
                                    <p>{fm.description}</p>
                                    <img src={fm.image} alt={fm.name} height={350} width={350} />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default DynamicFoodMenus;