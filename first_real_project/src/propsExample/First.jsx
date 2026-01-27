let First  = ({address ,fullname, age}) => {
    console.log("First Address: ",address);
    console.log("First Fullname: ",fullname);
    console.log("First Age: ",age);
    return (
        <div>
            <h1>First Component</h1>
            <p>Address: {address}</p>
            <p>Fullname: {fullname}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default First;
