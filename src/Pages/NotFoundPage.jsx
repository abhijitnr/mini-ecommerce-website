import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFoundPage.css"

function NotFoundPage() {
    return (
        <div className="not_found_page">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGSurC1dTDHrFf8hCLI2W3T8655CtiuPwQQ&usqp=CAU" alt="error_404" />
            <h1>404 ERROR</h1>
            <h3>Sorry ! The page you are looking is not found</h3>

            <Link to="/"><button className="back_to_home">GO BACK TO HOME</button></Link>
        </div>
    )
}

export default NotFoundPage