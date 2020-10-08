import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = ({ children }) => {
    return (
        <div className="carousel-item">
            <img src="" alt="" className="carousel-item__img" />
            <div className="carousel-item__details">
                <div>
                    <img src="" alt="play icon" className="carousel-item__details--img"/>
                    <img src="" alt="stop icon" className="carousel-item__details--img"/>
                </div>
                <p className="carousel-item__details--title">Titulo</p>
                <p className="carousel-item__details--subtitle">Subtítulo</p>
            </div>
        </div>
    );
}

export default CarouselItem;