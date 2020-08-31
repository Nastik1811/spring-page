import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const isAuthorized = useSelector(state => state.isAuthorized)

    const handleLogin = () => {
        dispatch(login(username, password))
    }
    if(isAuthorized){
        return(
            <Redirect to="/"/>
        )
    }
    return(
        <div className="main-container">
            <div className="auth-container">
                <h2>Login</h2>
                <form className="auth" onSubmit={handleLogin}>
                    <input className="input" value={username} onChange={e => setUsername(e.target.value)}/>
                    <input className="input" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login