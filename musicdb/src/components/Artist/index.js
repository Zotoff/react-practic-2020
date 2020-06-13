import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AlbumList from './albumList';

const REQ_URL = "http://localhost:3004/artists"


const Artists = (props) => {

    const [artist, setArtist] = useState('');

    useEffect(()=>{
        axios.get(`${REQ_URL}/${props.match.params.artistId}`)
        .then(response=>{
            setArtist(response.data);
        }).catch(error=>{
            props.history.push('/home');
        })
    },[props]); // чтобы компонент апдейтился при изменении

    return (
        <>
            <div className="artist_bio">
                <div className="avatar">
                    <span style={{background: `url('/images/covers/${artist.cover}.jpg') no-repeat center`}}></span>
                </div>
                <div className="bio">
                    <h3>{artist.name}</h3>
                    <div className="bio_text">
                        <p>{artist.bio}</p>
                    </div>
                </div>
            </div>
            <hr />
            <AlbumList albumList={artist.albums}/>
        </>
    )
}

export default Artists;