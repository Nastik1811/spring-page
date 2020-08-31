import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions'
import { Redirect } from 'react-router-dom'
import Input from './Input'
import background from '../../assets/images/why-spring.svg'


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
            <div className="content ">
                <div className="auth-container">
                    <div className="img-container">
                        <img src={background} alt="background" className="img"/>
                    </div>
                    <form className="auth" onSubmit={handleLogin}>
                        <h1 className="container-title">Login</h1>
                        <Input value={username} onChange={setUsername} label="Username"/>
                        <Input type="password" value={password} onChange={setPassword} label="Password"/>
                        <button className="submit-btn" type="submit" >Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login