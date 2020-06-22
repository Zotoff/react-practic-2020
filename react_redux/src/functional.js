import React from 'react';
import {connect} from 'react-redux';
import {getMoviesList} from "./actions";

const Functional = ({movies, getMoviesList}) => {
    return(
        <>
        <div>
        Functional
        </div>
        <button
            onClick={()=> getMoviesList()}
        >Movies</button>
        </>
    )
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = {getMoviesList}

export default connect(mapStateToProps, mapDispatchToProps)(Functional);