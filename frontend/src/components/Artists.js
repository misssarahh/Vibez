import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Artists.css';

const Artists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/artists')
            .then(response => {
                setArtists(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the artists!', error);
            });
    }, []);

    return (
        <div className="artist-list">
            {artists.map(artist => (
                <div key={artist.id} className="artist-card">
                    <img src={artist.image} alt={artist.name} />
                    <h2>{artist.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Artists;
