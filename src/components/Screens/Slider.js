import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = ({ onClickButton }) => {
    return (
        <div className='carousel-container'>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <div className="banner">
                        <div className='slide-1'>
                            <div className="carousel-content">
                                <p className="explore">EXPLORE EXICTING PRODUCTS AND CATEGORIES</p>
                                <p className="slide-shopping">Shopping made easy as you gain access to multiple cateories and products</p>
                                <button onClick={onClickButton} className="btn btn-lg slide-btns slide-btn1"  >Explore Now!</button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner">
                        <div className = "slide-2">
                            <div className="carousel-content">
                                <p className="explore">SHOP FROM THE COMFORT OF YOUR HOME</p>
                                <p className="slide-shopping">A great shopping "Experience" at any moment</p>
                                <button onClick={onClickButton} className="btn btn-lg slide-btns slide-btn2">Shop Now!</button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}


export default Slider;