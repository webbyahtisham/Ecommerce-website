import React from 'react'
import thambnail from '../Images/image 11.png'
const ProductDetail = () => {
    return (
        <>
            <section className="product">
                <div className="product-detail-container">
                    <div className="product-img">
                        <img src={thambnail} alt="thambnail" />
                    </div>
                    <div className="product-detail">
                        <h1>One Life Graphic T-shirt</h1>
                        <div className="product-price">
                            $260
                        </div>
                        <div className="product-size">
                            <div className='product-size-p' >Choose Size</div>
                            <div className="sizes">

                                <div className="size-button">Smaal</div>
                                <div className="size-button">medium</div>
                                <div className="size-button">large</div>





                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail
