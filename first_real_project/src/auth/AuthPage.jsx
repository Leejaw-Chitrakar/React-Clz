import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';
let AuthPage = ({isAuthenticated}) => {
    if(isAuthenticated){
        return(
            <Dashboard />
        )
    }
    else{
        return <Login />
    }
}

export default AuthPage;