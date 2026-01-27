import Profile from "../pages/Profile.jsx"
let EventHandeling = () => {
    let handleIncrement = (event) => {
        console.log("Increment Clicked")
        event.target.style.backgroundColor="red"
    }

    let handleOnChange = (event) => {
        console.log("Input Change")
        console.log(event.target.value)
    }

    return (
        <div>
            <h1>Event Handeling</h1>
            <input placeholder="Enter your name" type="text" onChange={(event) => {
                console.log(event.target.value)
            }}/>
            <button onClick={handleIncrement}>Increment</button> 
            <button onClick={(event) => {
                console.log(event.target)
            }}>Decrement</button> 
            <Profile name="Leejaw Chitrakar" age={19} address="Kathmandu"/>
        </div>
    )
}

export default EventHandeling;