import {MOVIES_LIST} from '../types';
import axios from 'axios';

// Triggering an action and it goes to the reducer with necessary data

export function getMoviesList(){

    const request = axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            return response.data;
        })

    return {
        type: MOVIES_LIST,
        // payload: [
        //     {id: 12, name: 'pulp fiction'},
        //     {id: 13, name: 'inglorious bastards'},
        //     {id: 134, name: 'interstellar'}
        // ]
        payload: request
    }
}