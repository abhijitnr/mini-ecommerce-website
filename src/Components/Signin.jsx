import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import "./Signin.css";

function Signin() {
    const { isAuth, toggleAuth } = useContext(CartContext);

    if (isAuth) {
        return <Navigate to="/" />
    }
    return (
        <div className="sigin_parent">
            <h1>LOGIN PAGE</h1>
            <button className="login_logout" onClick={toggleAuth}>LOGIN</button>
        </div>
    )
}

export default Signin