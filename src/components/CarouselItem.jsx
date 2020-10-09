import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

import playIcon from '../../src/assets/static/play-icon.png';
import plusIcon from '../../src/assets/static/plus-icon.png';
import fotoVideo from '../../src/assets/static/foto-video.jpg';
const CarouselItem = ({ children }) => {
    return (
        <div className="carousel-item">
            <img src={fotoVideo} alt="" className="carousel-item__img" />
            <div className="carousel-item__details">
                <div>
                    <img src={playIcon} alt="play icon" className="carousel-item__details--img"/>
                    <img src={plusIcon} alt="plus icon" className="carousel-item__details--img"/>
                </div>
                <p className="carousel-item__details--title">Titulo</p>
                <p className="carousel-item__details--subtitle">Subtítulo</p>
            </div>
        </div>
    );
}

export default CarouselItem;