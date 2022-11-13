// import { useState } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import ItemIncDec from './ItemIncDec';
import "./ShoppingCart.css";


function ShoppingCart() {
    const { cartdata, setCartdata } = useContext(CartContext);
    const [price, setPrice] = useState(0);

    // const totleprice = cartdata.reduce((price, item) => price + item.price, 0);

    const modifyQty = (id, element) => {
        const updatedData = cartdata.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + element } : item
        );
        setCartdata(updatedData);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cartdata.map((item) => (ans += item.price * item.quantity));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    }, []);

    const handlePlaceOrder = () => {
        alert(`Your order successfully placed of price ₹ ${price}`);
    }

    return (
        <div className="shopping_cart">

            <div>
                {
                    cartdata.map((item) => (
                        <div className="shopping_item" key={item.id}>
                            <img className="shopping_item_image" src={item.image} alt={item.title} />
                            <div className="shopping_product_details">
                                <h2>{item.brand}</h2>
                                <h4>{item.title}</h4>
                                <p>Category : #{item.category}</p>
                                <h4>₹ {item.price * item.quantity}</h4>
                            </div>
                            <div>
                                <ItemIncDec modifyQty={modifyQty} id={item.id} />
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="total_price">
                <h3>Total Price : ₹ {price}</h3>
            </div>

            <div className="total_price">
                <Link to="/"><button className="place_order_button" onClick={handlePlaceOrder}>PLACE ORDER</button></Link>
            </div>

        </div>
    )
}

export default ShoppingCart;


// brand
// category
// id
// image
// price
// title