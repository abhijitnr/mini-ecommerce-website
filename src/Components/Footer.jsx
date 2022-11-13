import React from 'react'
import FaqPage from "../Pages/FaqPage";
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
            <div>
                <h2 className="font_change">Social Media</h2>
                <div className="social_icon">
                    <p> <span><i class="fa-brands fa-linkedin"></i></span> </p>
                    <p> <span> <i class="fa-brands fa-youtube"></i></span> </p>
                    <p> <span> <i class="fa-brands fa-square-facebook"></i> </span></p>
                    <p> <span> <i class="fa-brands fa-square-twitter"></i> </span></p>
                </div>

            </div>

            <div className="faq_section">
                <h2 className="font_change">FAQ</h2>
                <FaqPage />
            </div>

            <div>
                <h2 className="font_change">Job Oppertunities</h2>
                <p>* Freelancer</p>
                <p>* Digital marketing</p>
                <p>* Influncer</p>
                <p>* Software Developer</p>

            </div>
        </div>
    )
}

export default Footer