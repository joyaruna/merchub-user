import React from 'react';
import Header from '../Header/Header';
import Slider from '../Screens/Slider';
import Footer from '../Footer/Footer';
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="LandingPage">
            <Header />
            <Slider />
            <div className="featured-categories">
                <div className="category-head">
                    <h1>Kitchen Appliances</h1>
                    <div className="category-items">
                        <a href="/product"><img alt="Main" className="main" src="/images/blender.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/pot.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/microwaver.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/toaster.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/oven.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/fridge.jpg" /></a>
                    </div>
                </div>
                <div className="category-head">
                    <h1>Fashion & Style</h1>
                    <div className="category-items">
                        <a href="/"><img alt="Main" className="main" src="/images/polo.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/palm.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/pink-top.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/watches1.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/sneakers1.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/travel-bag.jpg" /></a>
                    </div>
                </div>
                <div className="category-head">
                    <h1>Supermarket & Groceries</h1>
                    <div className="category-items">
                        <a href="/"><img alt="Main" className="main" src="/images/rice.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/oil.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/milo.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/pasta.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/hypo.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/butter.jpg" /></a>
                    </div>
                </div>
                <div className="category-head">
                    <h1>Computing & Electronics</h1>
                    <div className="category-items">
                        <a href="/"><img alt="Main" className="main" src="/images/laptop.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/mouse.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/flash.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/printer.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/xprinter.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/palmtop.jpg" /></a>
                    </div>
                </div>
                <div className="category-head">
                    <h1>Phones & Tablets</h1>
                    <div className="category-items">
                        <a href="/"><img alt="Main" className="main" src="/images/samsung.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/udmi.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/tab2.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/tab1.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/qubo.jpg" /></a>
                        <a href="/"><img alt="Main" className="main" src="/images/tab3.jpg" /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default LandingPage;