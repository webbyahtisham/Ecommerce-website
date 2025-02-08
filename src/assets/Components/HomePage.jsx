import React from 'react'
import NewArrival from '../Components/NewArrival'
import TopSelling from './TopSelling'
import Subscribe from '../Components/Subscribe'
import heroImg from '../Images/Hero.png'
import versace from '../Images/versace.png'
import zara from '../Images/zara.png'
import gucci from '../Images/gucci.png'
import prada from '../Images/prada.png'
import ck from '../Images/ck.png'
import img15 from '../Images/image 15.png'
import img16 from '../Images/image 16.png'
import img17 from '../Images/image 17.png'
import img18 from '../Images/image 18.png'
const HomePage = () => {
    return (
        <>
            <main>
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
                    <section className="brands">
                        <div className="brands-container">
                            <img src={versace} alt="" />
                            <img src={zara} alt="" />
                            <img src={gucci} alt="" />
                            <img src={prada} alt="" />
                            <img src={ck} alt="" />
                        </div>
                    </section>
                </section>
                <NewArrival h1={"New arrival"} />
                <TopSelling h1={"Top selling"} />
                <section className="dress-style">
                    <div className="dress-style-container1">
                        <h2>BROWSE BY DRESS STYLE</h2>
                        <div className="dress-style-container2">
                            <div className="dress-style-item">
                                <img src={img15} alt="Casual" />
                                <span>Casual</span>
                            </div>
                            <div className="dress-style-item">
                                <img src={img16} alt="Formal" />
                                <span>Formal</span>
                            </div>
                            <div className="dress-style-item">
                                <img src={img17} alt="Party" />
                                <span>Party</span>
                            </div>
                            <div className="dress-style-item">
                                <img src={img18} alt="Gym" />
                                <span>Gym</span>
                            </div>
                        </div>
                    </div>
                </section>
                <Subscribe/>
            </main>
        </>
    )
}

export default HomePage
