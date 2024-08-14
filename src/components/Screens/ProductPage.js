import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./ProductPage.css"


const ProductPage = () => {
    return (
        <div className="ProductPage">
            <Header />
            <div className="info-container">
                <div className="product-image">
                    <div className="main-image">
                        <img alt="Main" className="main" src="/images/blender.jpg" />
                    </div>
                    <div className="sub-image">
                        <img alt="Sub" className="first-sub" src="/images/blender1.jpg" />
                        <img alt="Sub" className="second-sub" src="/images/blender2.jpg" />
                    </div>
                </div>
                <div className="product-description">
                    <h1 className="product-name">BLENDER AND GRINDER</h1>
                    <h3 className="description">This Blender comes with an incredible pulsing function, an all-metal drive system with a safety lock and 2-speeds. The durable stainless steel blade ensures its longevity as it is easy to maintain by cleaning and its 1.5-litre jar is equally scratch resistant. It is powered by a 800w 3500rpm  motor which with the 2 high-speed power options blend through any food ingredient, fruit or ice. Portable and easy to use, It won't take much space on your kitchen counter and is very easy to clean.</h3>
                    <h2 className="key-features">Key Features</h2>
                    <h3>2 in 1 blending functions with motor overheating protection
                    4 speed blender with pulse function
                    Durable stainless steel blade
                    Exclusive all metal blade drive system
                    Scratch resistant 1.5L jar
                    Easy clean components
                    Extra mill cup</h3>
                    <h2>Specifications</h2>
                    <h3>SKU: GE779HL0AB5D2NAFAMZ
                    Area of Use: Kitchen
                    Style: Modern
                    Color: Black,
                    Model: new
                    Product Line: assorted store
                    Weight (kg): 1.85</h3>
                    <div className="order">
                        <button className="place-order">Place an Order</button>
                    </div>
                </div>
            </div>
            <div className="related">
                <h1>Related Products</h1>
                <div className="related-products">
                    <a href="/"><img alt="Main" className="main" src="/images/pot.jpg" /></a>
                    <a href="/"><img alt="Main" className="main" src="/images/microwaver.jpg" /></a>
                    <a href="/"><img alt="Main" className="main" src="/images/toaster.jpg" /></a>
                    <a href="/product"><img alt="Main" className="main" src="/images/blender.jpg" /></a>
                    <a href="/"><img alt="Main" className="main" src="/images/oven.jpg" /></a>
                    <a href="/"><img alt="Main" className="main" src="/images/fridge.jpg" /></a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ProductPage;