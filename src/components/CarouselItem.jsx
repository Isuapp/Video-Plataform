import React from 'react';
import { connect } from 'react-redux'
import { setFavorite } from '../actions'
import PropTypes from 'prop-types'
import '../assets/styles/components/CarouselItem.scss'

import playIcon from '../../src/assets/static/play-icon.png';
import plusIcon from '../../src/assets/static/plus-icon.png';
const CarouselItem = (props) => {
    const {cover, title, year, contentRaiting, duration } = props;
    const handleSetFavorite = () =>{
        props.setFavorite(
            {
                cover, title, year, contentRaiting, duration
            })
    }
    return (
        <div className="carousel-item">
            <img src={cover} alt="" className="carousel-item__img" />
            <div className="carousel-item__details">
                <div>
                    <img src={playIcon} alt="play icon" className="carousel-item__details--img"/>
                    <img 
                        src={plusIcon} 
                        alt="plus icon" 
                        className="carousel-item__details--img"
                        onClick={handleSetFavorite}
                    />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRaiting} ${duration}`}</p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    cover:PropTypes.string, 
    title:PropTypes.string, 
    year:PropTypes.number, 
    contentRaiting:PropTypes.string, 
    duration:PropTypes.number 
}
const mapDispatchToProps = {
    setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);