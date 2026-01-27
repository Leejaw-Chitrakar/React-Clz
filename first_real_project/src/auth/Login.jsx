let rules = [
    {name:"email", type:"email", placeholder:"Enter your email", rule:"required | email"},
    {name:"password", type:"password", placeholder:"Enter your password", rule:"required | min:8"}
]

let LoginPage = () => {
    return(
        <div>
            <h1>This is LoginPage</h1>
            <div>
                <h2>Rules: </h2>
                <ol>
                    {
                        rules.map(
                            (element,index)=>{
                                return(
                                    <li key={index}>
                                        {element.name} : {element.rule}
                                    </li>                        
                                )
                            }
                        )
                    }
                </ol>
            </div>
            <p>Prease enter the following details to login:</p>
            <div>
                <input type="email" placeholder="Enter your email" />
                <br />
                <br />
                <input type="email" placeholder="Enter strong password." />
                <br />
                <br />
                <button>Login</button>
            </div>
        </div>
    )
}

export default LoginPage;