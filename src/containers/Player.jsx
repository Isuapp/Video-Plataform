import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
// Importando estilos  
import '../assets/styles/components/Player.scss'


const Player = props => {

    const { id } = props.match.params;

    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button
                    onClick={() => props.history.goBack()}
                    type="button"
                >Regresar</button>
            </div>
        </div>

    )
        :
        <NotFound />
};

const mapsStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapsStateToProps, mapDispatchToProps)(Player);