import React, { createContext, useState } from 'react'

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [cartdata, setCartdata] = useState([]);

    function AddtoCart(item) {
        setCartdata([...cartdata, { ...item, quantity: 1 }])
    }

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }


    return (
        <CartContext.Provider value={{ cartdata, setCartdata, AddtoCart, isAuth, toggleAuth }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider