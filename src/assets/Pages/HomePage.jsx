import React from 'react'
import NewArrival from '../Components/NewArrival'
import TopSelling from '../Components/TopSelling'
import Subscribe from '../Components/Subscribe'
import Button from '../Components/Button'
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <main>
                <section className="hero">
                    <div className="hero-container">
                        <div className="hero-1">
                            <h1 className='hero-1-h1-1'>Find cloths <br /> that matches <br /> your style</h1>
                            <p className='hero-1-p-1'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <Button name="Shop Now" link="/shop" />
                        </div>
                        <div className="hero-2">
                            <img src="/Images/Hero.png" alt="heroimg" />
                        </div>
                    </div>
                    <section className="brands">
                        <div className="brands-container">
                            <img src="/Images/versace.png" alt="Versace" />
                            <img src="/Images/zara.png" alt="Zara" />
                            <img src="/Images/gucci.png" alt="Gucci" />
                            <img src="/Images/prada.png" alt="Prada" />
                            <img src="/Images/Ck.png" alt="CK" />
                        </div>
                    </section>
                </section>
                <NewArrival h1={"New arrival"} />
                <TopSelling h1={"Top selling"} />
                <section className="dress-style">
                    <div className="dress-style-container1">
                        <h2>BROWSE BY DRESS STYLE</h2>
                        <div className="dress-style-container2">
                            <NavLink to="/shop" className="dress-style-item">
                                <img src="/Images/image 15.png" alt="Casual" />
                                <span>Casual</span>
                            </NavLink>
                            <NavLink to="/shop" className="dress-style-item">
                                <img src="/Images/image 16.png" alt="Formal" />
                                <span>Formal</span>
                            </NavLink>
                            <NavLink to="/shop" className="dress-style-item">
                                <img src="/Images/image 17.png" alt="Party" />
                                <span>Party</span>
                            </NavLink>
                            <NavLink to="/shop" className="dress-style-item">
                                <img src="/Images/image 18.png" alt="Gym" />
                                <span>Gym</span>
                            </NavLink>
                        </div>
                    </div>
                </section>
                <Subscribe />
            </main>
        </>
    )
}

export default HomePage
