import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesList} from "./actions";

const Hooks = () => {

    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();

    // Trigger after the component gets mounted
    useEffect(()=>{
        dispatch(getMoviesList())
    },[dispatch])

    console.log(movies);
    return(
        <>
            <div>
                Hooks
            </div>
        </>
    )
}

export default Hooks