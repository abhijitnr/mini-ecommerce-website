import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext'

function PrivateRoute({ children }) {
    const { isAuth } = useContext(CartContext);

    if (!isAuth) {
        return <Navigate to="/signin" />
    }
    return children;
}

export default PrivateRoute