import React from 'react'
import NewArrival from '../Components/NewArrival'
import heroImg from '../Images/Hero.png'
import versace from '../Images/versace.png'
import zara from '../Images/zara.png'
import gucci from '../Images/gucci.png'
import prada from '../Images/prada.png'
import ck from '../Images/ck.png'
import TopSelling from './TopSelling'
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
                <TopSelling h1={"Top selling"}/>
            </main>
        </>
    )
}

export default HomePage
