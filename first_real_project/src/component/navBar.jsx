import "../style/navBar.css"

let Navbar = () => {
    // beter way to use onclick

    let handleProfileClick = (event) => {
        console.log("Profile Clicked");
        event.target.style.backgroundColor = "skyblue";
        event.target.style.padding = "5px";
        event.target.style.borderRadius = "10px";
        console.log(event.target.style);
    }

    /*
        let event = {
            target: {
                style: {
                    backgroundColor: "skyblue",
                    padding: "5px",
                    borderRadius: "10px"
                }
            }
        }
    */

    let handleSearchOnChange = (e) => {
        console.log(e.target.value);
        let v = e.target.value;
        console.log(v.length);
        let random1 = Math.random().toFixed(0)*255;
        let random2 = Math.random().toFixed(0)*255;
        let random3 = Math.random().toFixed(0)*255;
        console.log(random1.toFixed(0))
        let R = random1;
        let G = random2;
        let B = random3;
        e.target.style.backgroundColor= `rgba(${R},${G},${B})`;
    }
    return (
        <div className="navbar">
            {/* inline style */}
            <h1 style= {{
                backgroundColor: "yellow",
                padding: "10px",
                borderRadius: "50px"
            }}>NavBar</h1>
            <div className="menus">
                <input type="text" onChange={handleSearchOnChange} placeholder="Search" />
                <h4 onClick={
                    (event) =>{
                        console.log(event.target);
                        console.log("Home Clicked");
                    }
                }>Home</h4>
                <h4 onClick={handleProfileClick}>Profile</h4>
            </div>
        </div>
    )
}

export default Navbar