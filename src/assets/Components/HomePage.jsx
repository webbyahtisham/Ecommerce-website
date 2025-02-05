import React from 'react'
import heroImg from '../Images/Hero.png'
const HomePage = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-container">
                <div className="hero-1">
                    <h1 className='hero-1-h1-1'>Find cloths <br /> that matches <br /> your style</h1>
                    <p className='hero-1-p-1'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className='hero-1-btn-1' >shop now</button>
                </div>
                <div className="hero-2">
                    <img src={heroImg} alt="heroimg" />
                </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
