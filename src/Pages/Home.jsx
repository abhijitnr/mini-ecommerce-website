import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
        <div className="welcome_banner">
            <h1 className="welcome_greet"> <span>WELCOME</span> TO REACT CART ASSIGNMENT</h1>
            <Link to="/products"><button className="goto__product">See Products</button></Link>
        </div>
    )
}

export default Home