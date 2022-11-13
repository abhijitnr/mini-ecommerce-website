import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import "./Products.css";


const getParamUrl = (value) => {

    value = Number(value)
    if (value === 'number' && value < 0) {
        return value = 1
    }
    else if (!value) {
        return value = 1
    }
    return value;
}

const getProducts = (page = 1, limit) => {
    return fetch(`https://json-servr-test.herokuapp.com/data?_page=${page}&_limit=${limit}`)
        .then((response) => response.json());
}


function Products() {
    const [searchparams, setSearchparams] = useSearchParams()
    const [products, setProducts] = useState([]);
    const [page, setpage] = useState(getParamUrl(searchparams.get('page')) || 1);
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        getProducts(page, limit)
            .then((data) => {
                // console.log(data);
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [page, limit]);

    // console.log(products);


    useEffect(() => {

        let param = { page, limit }
        setSearchparams(param);

    }, [page, limit, setSearchparams])


    return (
        <div style={{ marginTop: "100px" }}>

            <h1 style={{ textAlign: 'center' }}>Latest Products</h1>
            <hr className="horizantal_line" />
            <div className="product_item_parent">
                {
                    products.map((item) => (
                        <div key={item.id} className="product_item_child">
                            <img src={item.image} alt={item.title} className="product_image"></img>
                            <p style={{ textAlign: 'center' }}> {item.title}</p>
                            <p style={{ textAlign: 'center', fontSize: '22px', marginTop: '-3%' }}>Price : ₹{item.price} </p>
                            <Link to={`/products/${item.id}`}><button className="product_more_details" > More Details </button>  </Link>
                        </div>
                    ))
                }
            </div>

            <div className="pagination_div">
                <button onClick={() => setpage(page - 1)} disabled={page === 1} className="pagination_button">PREV</button>
                <button className="pagination_button">{page}</button>
                <button onClick={() => setpage(page + 1)} disabled={page === 5} className="pagination_button">NEXT</button>
            </div>

        </div>


    )
}

export default Products