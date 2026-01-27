// destructuring let {a,b,c} = {a:1,b:2,c:3}

let Profile = ({address, name, age}) => {
    // console.log("Props: ",props.address)
    // console.log("Name: ",props.name)
    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Address: {address}</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                count = count + 1;
                console.log("Count:",count)
            }}>
                Increase count
            </button>
        </div>
    )
}

export default Profile