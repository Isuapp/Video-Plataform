import {useState, useEffect} from 'react';

// 'http://localhost:3000/initalState'
const useIntialState = (API)=>{
    const [ videos, setVideos ] = useState({ mylist:[], trends:[], originals:[]});

    useEffect(()=>{
        fetch(API)
        .then(response=>response.json())
        .then(data => setVideos(data));

    }, []);

    return videos;
}

export default useIntialState