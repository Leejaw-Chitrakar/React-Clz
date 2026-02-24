import foodMenuList from "../datas/food_menue_data.js"

const FoodMenu = () => {
    return(
        <div>
            <h1>Food Menu</h1>
            {/* rendering list */}
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

export default FoodMenu;