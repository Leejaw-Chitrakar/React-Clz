let names = ["Leejaw", "Ankit", "Prabesh"]
let Dashboard = () => {
    return(
        <div>
            <h1>This is Dashboard</h1>
            <p>User Authenticated.</p>
            <p>You are good to go.</p>
            <ul>
                {
                names.map(
                    (element,index)=>{
                        return(
                            <li key={index}>{element}</li>                  
                        )
                    }
                )
            }
            </ul>
        </div>
    )
}

export default Dashboard;