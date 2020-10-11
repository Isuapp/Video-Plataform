import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// IMPORTANDO LOS ESTILOS GENERALES
import '../assets/styles/App.scss';
// LLAMADA A LOS HOOOKS
import useInitialState from '../hooks/useInitialState'
// LLAMAD A LA API PARA PODER USARLA EN LOS HOOKS
const API = 'http://localhost:3000/initalState';


const Home = () => {
    const initialState = useInitialState(API)

    return initialState.length === 0 ? <h1>LOADING...</h1> : (

        <>
            <Search />
            { initialState.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel ><CarouselItem /> </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {
                        initialState.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                </Carousel>
            </Categories>
            <Categories title="Originales">
                <Carousel>
                    {
                        initialState.originals.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                </Carousel>
            </Categories>
        </>
    )
};

export default Home;