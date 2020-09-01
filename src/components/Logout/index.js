import React from 'react'
import { logout } from '../../actions'
import { useDispatch } from 'react-redux'

const Logout = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        localStorage.setItem("isAuthorized", false)
        dispatch(logout())
    }
    return (
        <button className="logout-btn" onClick={handleLogout}> Log out</button>
    )
}

export default Logout