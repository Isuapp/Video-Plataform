import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFavorite, deleteFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../../src/assets/static/play-icon.png';
import plusIcon from '../../src/assets/static/plus-icon.png';
import removeIcon from '../../src/assets/static/remove-icon.png';

const CarouselItem = (props) => {

    const { id, cover, title, year, contentRaiting, duration, isList } = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id, cover, title, year, contentRaiting, duration
        })
    }
    const handleDeleteFavorite = (itemID) => {
        props.deleteFavorite(itemID)
    }


    return (
        <div className="carousel-item">
            <img src={cover} alt="" className="carousel-item__img" />
            <div className="carousel-item__details">
                <div>
                    <img src={playIcon} alt="play icon" className="carousel-item__details--img" />

                    {
                        isList ?
                            <img
                                src={removeIcon}
                                alt="remove icon"
                                className="carousel-item__details--img"
                                onClick={() => handleDeleteFavorite(id)}
                            />
                            :
                            <img
                                src={plusIcon}
                                alt="plus icon"
                                className="carousel-item__details--img"
                                onClick={handleSetFavorite}
                            />
                    }

                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRaiting} ${duration}`}</p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRaiting: PropTypes.string,
    duration: PropTypes.number
}
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);