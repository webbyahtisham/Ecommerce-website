import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Subscribe = () => {
    return (
        <>
            <div className="newsletter-container">
                <div className="newsletter-box">
                    <div className="title">
                        <h2>STAY UPDATED ABOUT<br /><span>OUR LATEST OFFERS</span></h2>
                    </div>

                    <form className="subscribe-form">
                        <input type="email"
                            className="email-input"
                            placeholder="Enter your email address"
                            required />
                        <button type="submit" className="subscribe-btn">
                            <i className="ri-mail-send-line"></i>
                            Subscribe to Newsletter
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Subscribe
