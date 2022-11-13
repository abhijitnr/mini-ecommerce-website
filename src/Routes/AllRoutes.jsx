import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AboutUs from "../Pages/AboutUs";
import FaqPage from "../Pages/FaqPage";
import ContactUs from "../Pages/ContactUs";
import NotFoundPage from '../Pages/NotFoundPage';
import SingleProduct from '../Pages/SingleProduct';
import ShoppingCart from '../Pages/ShoppingCart';
import Signin from '../Components/Signin';
import PrivateRoute from '../Components/PrivateRoute';


function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                } />
                <Route path="/products/:id" element={
                    <PrivateRoute>
                        <SingleProduct />
                    </PrivateRoute>
                } />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/shoppingcart" element={
                    <PrivateRoute>
                        <ShoppingCart />
                    </PrivateRoute>
                } />
                <Route path="/signin" element={<Signin />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}

export default AllRoutes